conversation = [
    {
        from: 0,
        to: 6.4,
        speaker: "Pete",
        transcript: "Hi Jenny, it's pete. Jay tells me that you would like to discuss your home insurance quote in more detail"
    },
    {
        from: 6.4,
        to: 9.4,
        speaker: "Jenny",
        transcript: "Hi Pete. That would be great thanks"
    },
    {
        from: 9.4,
        to: 13,
        speaker: "Pete",
        transcript: "Did you know there are a number of ways you can reduce your premium"
    },
    {
        from: 13,
        to: 18.4,
        speaker: "Pete",
        transcript: "Have you thought about installing security lighting, using a safe or paying annually?"
    },
    {
        from: 18.4,
        to: 22,
        speaker: "Jenny",
        transcript: "No I hadn't. That's very helpful thank you"
    },
    {
        from: 22,
        to: 26.6,
        speaker: "Pete",
        transcript: "You're welcome. Would you be interested in any other insurance policies with us?"
    },
    {
        from: 26.6,
        to: 28.4,
        speaker: "Jenny",
        transcript: "Not today thank you."
    },
    {
        from: 28.4,
        to: 33.2,
        speaker: "Pete",
        transcript: "Not a problem. I will save this conversation in our history for next time we speak"
    },
    {
        from: 33.2,
        to: 34.4,
        speaker: "Jenny",
        transcript: "Thank you"
    },
];

var interval = 8000;
var sentimentValue = 30;

var startSentimentInterval = function () {
    // set up the updating of the chart each second
    var series = this.series[0];
    var sent_interval = setInterval(function () {
        sentimentValue += Math.floor(Math.random() * 5) + 6;
        sentimentValue = Math.min(sentimentValue,100);
        var x = (new Date()).getTime(), // current time
            y = sentimentValue,
            symbolUrl;
        if (sentimentValue >= 80) {
            symbolUrl = 'url(images/happy.png)'
        } else if (sentimentValue < 80 && sentimentValue >= 60) {
            symbolUrl = 'url(images/smile.png)'
        } else if (sentimentValue < 60 && sentimentValue >= 40)  {
            symbolUrl = 'url(images/neutral.png)'
        } else {
            symbolUrl = 'url(images/sad.png)'
        }
        var point = {
            x: x,
            y: y,
            marker: {
                symbol:symbolUrl
            }
        };
        series.addPoint(point, true, true);

        if (sentimentValue >99) {
            clearInterval(sent_interval);
        }
    }, interval);
}

var generateData = function () {
    // generate an array of random data
    var data = [],
        time = (new Date()).getTime(),
        i;
    for (i = -4; i <= 0; i += 1) {
        data.push({
            x: time + 2*i * 1000,
            y: 30,
            marker: {
                symbol: 'url(images/sad.png)'
            }
        });
    }
    return data;
}

var tooltipFormatter = function () {
    return '<b>' + this.series.name + '</b><br/>' +
        Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
        Highcharts.numberFormat(this.y, 2) + "%";
}

var chartOptions = {
    chart: {
        type: 'spline',
        animation: Highcharts.svg, // don't animate in old IE
        marginRight: 10,
        events: {
            load: startSentimentInterval
        }
    },
    title: {
        text: '',
        style: {
            display: 'none'
        }
    },
    xAxis: {
        type: 'datetime',
        tickPixelInterval: 150
    },
    yAxis: {
        min: 0,
        max: 100,
        startOnTick: false,
        endOnTick: false,
        title: {
            text: 'Sentiment'
        },
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }]
    },
    tooltip: {
        formatter: tooltipFormatter
    },
    series: [{
        name: 'Sentiment',
        showInLegend: false,
        data: (generateData())
    }],
    exporting: { enabled: false },
    credits: {
        enabled: false
    }
}

Highcharts.chart('container', chartOptions);

var scrollChat = function() {
    //$(".chat-history").animate({ scrollTop: $(".chat").height() }, 100);
    $(".chat-history").stop().animate({ scrollTop: $(".chat-history")[0].scrollHeight}, 100);
}

var startListening = function() {
    microphone.start();
    function setTime() {
        ++totalSeconds;
        secondsLabel.innerHTML = pad(totalSeconds % 60);
        minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
    }

    function pad(val) {
        var valString = val + "";
        if (valString.length < 2) {
            return "0" + valString;
        } else {
            return valString;
        }
    }

    $('.action-listening').removeClass('disabled');
    $('.action-not-listening').addClass('disabled');

    var minutesLabel = document.getElementById("timer-minutes");
    var secondsLabel = document.getElementById("timer-seconds");
    var totalSeconds = 0;
    var timerInterval = setInterval(setTime, 1000);

    playAudio();
}

var handleRecommendationExplainCosts = function() {
    var template = Handlebars.compile( $('#script-template').html() );
    var script = "You can reduce your premium, by one of the following: 1 installing security lighting 2. using a safe 3. paying annually";
    var html = template({content: script});
    if ( $( ".script-wrapper" ).length ) {
        // replace content
        $('.script-wrapper').remove();
    }
    // add new
    $('.right-column').append(html);
    $('.script-wrapper').show('blind');
}

var handleRecommendationOfferDiscount = function() {
    var template = Handlebars.compile( $('#script-template').html() );
    var script = "I can offer you a monthly insurance premium of £210.";
    var html = template({content: script});
    if ( $( ".script-wrapper" ).length ) {
        // replace content
        $('.script-wrapper').remove();
    }
    // add new
    $('.right-column').append(html);
    $('.script-wrapper').show('blind');
}

// event when the page loads
$(document).ready(function() {
    // scroll the page
    scrollChat();
});

// click event for starting the conversation
$(document).on('click', '.action-start', startListening);

// click event for clicking on the suggestion of explaining the premium costs
$(document).on('click', '.explain', handleRecommendationExplainCosts);

// click event for clicking on the suggestion of offering discount
$(document).on('click', '.discount', handleRecommendationOfferDiscount);

// click event for ending the conversation
$(document).on('click', '.action-end', function() {
    $('.action-not-listening').removeClass('disabled');
    $('.action-listening').addClass('disabled');
});


function addSuggestions1() {
    var suggestions_template = Handlebars.compile( $('#suggestions1-template').html() );
    $(".suggestions-panel-body").append(suggestions_template({}));
}
function addSuggestions2() {
    var suggestions_template = Handlebars.compile( $('#suggestions2-template').html() );
    $(".suggestions-panel-body").append(suggestions_template({}));
}

function emptySuggestions() {
    $(".suggestions-panel-body").empty();
}

var updateVoiceRecognition = function() {
    $('#recognition-confidence').html(95);
    $('#recognition-confidence').css('color','#3ac461');
    $('#recognition-name').html('Jenny LaMee');
}

var audio = new Audio('audio/conversation.m4a');

function addConversationNode(index) {

    var conversationNode = conversation[index];
    var template;
    if (conversationNode.speaker === "Pete") {
        template = Handlebars.compile( $('#message-response-template').html() );
    } else {
        template = Handlebars.compile( $('#message-template').html() );
    }
    var $chatHistory = $('.chat-history ul');

    var context = {
        from: conversationNode.from,
        to: conversationNode.to,
        messageOutput: conversationNode.transcript,
        time: "now",
        name: conversationNode.speaker
    };
    $chatHistory.append(template(context));
    scrollChat();
}

function step1() {
    audio.play();
}
function step2() {
    addConversationNode(0)
    //audio2.play();
}
function step3() {
    // audio 2 (jenny) ended
    addConversationNode(1);

    addSuggestions1();

    $('.more-info-popover').popover({
        trigger: 'hover'
    });
    updateVoiceRecognition();
}
function step4() {
    addConversationNode(2)
    //audio4.play();
}
function step5() {
    emptySuggestions();
    // empty script panel
    $('.script-wrapper').remove();

    addConversationNode(3)
}
function step6() {
    addSuggestions2();
    addConversationNode(4)
    //audio6.play();
}
function step7() {
    // audio6 ended (jenny)
    addConversationNode(5)
}

function step8() {
    addConversationNode(6)
}
function step9() {
    addConversationNode(7)
}
function step10() {
    addConversationNode(8)
}


function playAudio() {

    setTimeout(function() {
        step1();
        setTimeout(function() {
            step2();
            setTimeout(function() {
                step3();
                setTimeout(function() {
                    step4();
                    setTimeout(function(){
                        step5();
                        setTimeout(function() {
                            step6();
                            setTimeout(function() {
                                step7();
                                setTimeout(function() {
                                    step8();
                                    setTimeout(function() {
                                        step9();
                                        setTimeout(function() {
                                            step10();
                                            scrollChat();

                                        }, (conversation[8].to - conversation[8].from) * 1000)
                                    }, (conversation[7].to - conversation[7].from) * 1000)
                                }, (conversation[6].to - conversation[6].from) * 1000)
                            }, (conversation[5].to - conversation[5].from) * 1000)
                        }, (conversation[4].to - conversation[4].from) * 1000)
                    }, (conversation[3].to - conversation[3].from) * 1000)
                }, (conversation[2].to - conversation[2].from) * 1000)
            }, (conversation[1].to - conversation[1].from) * 1000)
        }, (conversation[0].to - conversation[0].from) * 1000)
    }, 1000)

}