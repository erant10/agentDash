'use strict';
// global window.fetch pollyfill for IE/Edge & Older Chrome/FireFox
require('whatwg-fetch');
const watsonSpeech = require('watson-speech');
const $ = require('jQuery');
const moment = require('moment');

// Constants
const GET_TOKEN_URL = 'http://localhost:8800/watson/token',
    SELECTORS = {
        tempContent: '#message-to-send',
        startListenButton: '#start_listen',
        stopListenButton: '#stop_listen',
        chatBox: '.chat-history',
        messageTemplate: '#message-template',
        messageResponseTemplate: "#message-response-template"

    };

var listening = false;

var token;
fetch(GET_TOKEN_URL)
    .then(function(response) {
        return response.text();
    }).then(function(_token) {
    token = _token;
}).catch(function(error) {
    console.log(error);
});

$(document).on('click', SELECTORS.startListenButton, function () {

    var startingTime = moment();

    // toggle listening
    listening = toggleListening();



    var stream = watsonSpeech.SpeechToText.recognizeMicrophone({
        token: token,
        max_alternatives: 4,
        objectMode: true,
        interim_results: true,
        speaker_labels: true
    });

    var $output = $(SELECTORS.tempContent).val('');

    var currentIndex = 0;
    // a result is approximately equivalent to a sentence, and is the granularity that alternatives are selected on
    //var conversation = [];
    //var lastChangeTime = 0;

    var conversation = {};

    stream.on('data', function(data) {
        var content = data.results[0].alternatives[0];

        // display transcript in textarea
        $output.val(content.transcript);
        /*
                if (data.result_index > currentIndex) {
                    // result_index incremented - process the new batch of data
                    var words = content.timestamps;

                    // create a mapping from the timing of the word to the word array
                    for(var word of words) {
                        conversation[ word[1] ] = {
                            from: word[1],
                            to: word[2],
                            text: word[0],
                            speaker: 2,
                            displayed: false
                        };
                    }

                    // add speaker labels to each word
                    var speakerLabels = data.speaker_labels;
                    for (var label of speakerLabels) {
                        var wordTiming = label.from;
                        if (conversation.hasOwnProperty(wordTiming)) {
                            conversation[wordTiming].speaker = label.speaker;
                        } else {
                            conversation[wordTiming] = {
                                from: label.from,
                                to: label.to,
                                text: "",
                                speaker: label.speaker
                            }
                        }
                    }

                    // group words by speaker in order of speech
                    var timings =  Object.keys(conversation).sort((a,b) => {
                            return Number(a)-Number(b)
                        }),
                        prevSpeaker = conversation[timings[0]].speaker,
                        prevSpeakerWordTime = timings[0];
                    for(var j = 1; j < timings.length; j++) {
                        var time = timings[j];
                        var curSpeaker = conversation[time].speaker;
                        if (curSpeaker === prevSpeaker || !curSpeaker) {
                            // same speaker
                            conversation[prevSpeakerWordTime].text += conversation[time].text;
                            if (conversation[time].to > conversation[prevSpeakerWordTime].to) {
                                conversation[prevSpeakerWordTime].to = conversation[time].to;
                            }
                            // remove the unnecessary entry
                            delete conversation[time]

                        } else {
                            // speaker changed - update timing
                            prevSpeaker = conversation[time].speaker;
                            prevSpeakerWordTime = time

                        }
                    }

                    // finally, update the conversation panel
                    const $chatHistory = $(SELECTORS.chatBox),
                        $chatHistoryList = $chatHistory.find('ul');
                    var speakerNames = ["Unknown","Agent", "Jenny", "Unknown"];
                    var finalTimings = Object.keys(conversation).sort((a,b) => {
                        return Number(a)-Number(b)
                    });

                    for(var j = 1; j < finalTimings.length; j++) {
                        var timeFromStart = finalTimings[j],
                            currentSpeaker = conversation[timeFromStart].speaker,
                            $messageTemplate;
                        if (currentSpeaker === 1) {
                            $messageTemplate = $(SELECTORS.messageResponseTemplate);
                        } else  {
                            $messageTemplate = $(SELECTORS.messageTemplate);
                        }
                        var template = Handlebars.compile( $messageTemplate.html() );
                        var context = {
                            from: timeFromStart,
                            to: conversation[timeFromStart].to,
                            messageOutput: conversation[timeFromStart].text,
                            time: startingTime.add(Number(timeFromStart),"seconds").format('h:mm:ss a'),
                            name: speakerNames[currentSpeaker]
                        };
                        if (conversation[timeFromStart].displayed) {
                            var elem = $($chatHistoryList.find("[data-timing-from='" + timeFromStart + "']")[0]);
                            // update the existing row
                            elem.replaceWith(template(context));
                            // remove all chat boxes the are within the current time frame
                            $chatHistoryList.filter(() => {
                                return (
                                    (Number($(this).attr("data-timing-from")) > timeFromStart)
                                    &&
                                    (Number($(this).attr("data-timing-to")) < conversation[timeFromStart].to)
                                );
                            }).remove();
                        } else {
                            // append to the chat
                            $chatHistoryList.append(template(context));
                        }

                        $chatHistory.scrollTop($chatHistory[0].scrollHeight);

                        // raise the display flag indicating that a result is displayed
                        conversation[timeFromStart].displayed = true;
                    }

                    $output.val('');

                    currentIndex = data.result_index;

                }
        */
    });

    stream.on('error', function (err) {
        console.log(err);
    });

    $(document).on('click', SELECTORS.stopListenButton, function () {
        stream.stop();
        //toggleListening();
    });

});

function toggleListening() {
    $(SELECTORS.startListenButton).toggleClass('hidden');
    $(SELECTORS.stopListenButton).toggleClass('hidden');

    return !listening;
}