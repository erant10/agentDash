var conversation = [
    {
        from: 0,
        to: 6.24,
        speaker: "Pete",
        transcript: "Hi Jenny, it's pete. Jay tells me that you would like to discuss your home insurance quote in more detail"
    },
    {
        from: 6.24,
        to: 9.26,
        speaker: "Jenny",
        transcript: "Hi Pete. Yes please",
        actions: [
            {
                confidenceAbbrev:'high',
                icon: 'costs',
                confidence: 92.7,
                stars: [true, true, true, true, true],
                title: 'Provide options to reduce quote premium',
                body: 'Installing security lighting, using a safe or paying annually'
            }, {
                confidenceAbbrev:'mid',
                icon: 'discount',
                confidence: 72.2,
                stars: [true, true, true, false, false],
                title: 'Offer different, cheaper products',
                body: ''
            }, {
                confidenceAbbrev:'low',
                icon: 'man-with-speech-bubble',
                confidence: 43.1,
                stars: [true, false, false, false, false],
                title: 'Discuss premium increase',
                body: ''
            }
        ],
        sentiment: [5,5,5,5,5]
    },
    {
        from: 9.26,
        to: 19.12,
        speaker: "Pete",
        transcript: "Did you know there are a number of ways you can reduce your premium. Have you thought about Installing security lighting, using a safe or paying annually?"
    },
    // {
    //     from: 14.11,
    //     to: 19.12,
    //     speaker: "Pete",
    //     transcript: "Installing security lighting, using a safe or paying annually?"
    // },
    {
        from: 19.12,
        to: 23.23,
        speaker: "Jenny",
        transcript: "No I hadn't. That's very helpful thank you",
        actions: [
            {
                confidenceAbbrev:'high',
                icon: 'shopping-bag',
                confidence: 96.6,
                stars: [true, true, true, true, true],
                title: 'Upsell additional products',
                body: 'Would you be interested in any other insurance policies with us?'
            },{
                confidenceAbbrev:'mid',
                icon: 'deal',
                confidence: 67.1,
                stars: [true, true, true, false, false],
                title: 'Close deal on home insurance product',
                body: ''
            },{
                confidenceAbbrev:'low',
                icon: 'logout',
                confidence: 53,
                stars: [true, false, false, false, false],
                title: 'Close the conversation',
                body: ''
            }
        ],
        sentiment: [1,5,1,0,1]
    },
    {
        from: 23.23,
        to: 29.02,
        speaker: "Pete",
        transcript: "You're welcome. Would you be interested in any other insurance policies with us?"
    },
    {
        from: 29.02,
        to: 32.11,
        speaker: "Jenny",
        transcript: "What offers do you have?",
        actions: [
            {
                confidenceAbbrev:'high',
                icon: 'car-insurance',
                confidence: 89.3,
                stars: [true, true, true, true, true],
                title: 'offer car insurance quote',
                body: 'Your new area is considered low risk for car insurance'
            },{
                confidenceAbbrev:'mid',
                icon: 'invoice',
                confidence: 71.6,
                stars: [true, true, true, false, false],
                title: 'offer contents insurance quote',
                body: ''
            }
        ],
        sentiment: [5,5,5,5,5]
    },
    {
        from: 32.11,
        to: 39.06,
        speaker: "Pete",
        transcript: "Your new area is considered to be low risk for car insurance. Would you be interested in receiving a quote from us?"
    },
    {
        from: 39.06,
        to: 41.11,
        speaker: "Jenny",
        transcript: "Yes please",
        actions: [
            {
                confidenceAbbrev:'high',
                icon: 'smartphone-call',
                confidence: 97.66,
                stars: [true, true, true, true, true],
                title: 'Request documents through app',
                body: 'Send me a picture of documents through the app'
            },{
                confidenceAbbrev:'mid',
                icon: 'message',
                confidence: 69.1,
                stars: [true, true, true, false, false],
                title: 'Request documents via email',
                body: ''
            }
        ],
        sentiment: [5,5,5,5,5]
    },
    {
        from: 41.11,
        to: 48.13,
        speaker: "Pete",
        transcript: "Please can you send me a picture of your driving license and upload your car registration documents to our app?"
    },
    {
        from: 48.13,
        to: 50.1,
        speaker: "Jenny",
        transcript: "All done",
        actions: [
            {
                confidenceAbbrev:'high',
                icon: 'smartphone-call',
                confidence: 91.7,
                stars: [true, true, true, true, true],
                title: 'Suggest ways to bring premium down',
                body: 'Would you like me to look at options of including others family members on the policy?'
            },{
                confidenceAbbrev:'mid',
                icon: 'message',
                confidence: 65.1,
                stars: [true, true, true, false, false],
                title: 'Provide the quote',
                body: ''
            }
        ],
        sentiment: [1,5,1,5,1]
    },
    {
        from: 50.1,
        to: 59,
        speaker: "Pete",
        transcript: "Thanks. Would you like me to look at options of including others family members on the policy? This could bring down the premium"
    },
    {
        from: 59,
        to: 60.1,
        speaker: "Jenny",
        transcript: "Oh, Yes please",
        actions: [
            {
                confidenceAbbrev:'high',
                icon: 'schedule',
                confidence: 97.05,
                stars: [true, true, true, true, true],
                title: 'Offer a quote with monthly and annual pay options',
                body: 'Monthly premium: £49.50 or annual premium: £550 with an excess of £500'
            },{
                confidenceAbbrev:'mid',
                icon: 'credit-card',
                confidence: 73.5,
                stars: [true, true, true, false, false],
                title: 'Offer quote as direct debit only',
                body: ''
            },{
                confidenceAbbrev:'low',
                icon: 'pay',
                confidence: 43.33,
                stars: [true, false, false, false, false],
                title: 'Offer quote as one off payment',
                body: ''
            }
        ],
        sentiment: [5,5,5,5,5]
    },
    {
        from: 60.1,
        to: 71.11,
        speaker: "Pete",
        transcript: "The current price we can offer you is monthly premium: £40.50 or annual premium: £550 with an excess of £500",
        actions: [
            {
                confidenceAbbrev:'high',
                icon: 'deal',
                confidence: 92,
                stars: [true, true, true, true, true],
                title: 'Seek to close the deal',
                body: 'I can also price lock this for you based on your moving in date. Would you like to proceed?',
                triggered: true
            },{
                confidenceAbbrev:'mid',
                icon: 'invoice',
                confidence: 80,
                title: 'Offer to save the quote',
                stars: [true, true, true, false, false],
                body: '',
                triggered: true
            },{
                confidenceAbbrev:'low',
                icon: 'shopping-bag',
                confidence: 33,
                stars: [true, false, false, false, false],
                title: 'Suggest additional sell on products',
                body: '',
                triggered: true
            }
        ],
        sentiment: [5,5,1,5,1]
    },
    {
        from: 71.11,
        to: 78.12,
        speaker: "Pete",
        transcript: "I can also price lock this for you based on your moving in date. Would you like to proceed?"
    },
    {
        from: 78.12,
        to: 83.13,
        speaker: "Jenny",
        transcript: "I would like to check to see if there are any better prices out there",
        actions: [
            {
                confidenceAbbrev:'high',
                icon: 'growth',
                confidence: 98.5,
                stars: [true, true, true, true, true],
                title: 'Offer to check competitor prices',
                body: 'I can check that for you'
            },{
                confidenceAbbrev:'mid',
                icon: 'save',
                confidence: 76.2,
                stars: [true, true, true, false, false],
                title: 'Offer to save the quote',
                body: ''
            },{
                confidenceAbbrev:'low',
                icon: 'shopping-bag',
                confidence: 36.5,
                stars: [true, false, false, false, false],
                title: 'Suggest additional sell on products',
                body: ''
            }
        ],
        sentiment: [5,5,5,5,5]

    },
    {
        from: 83.13,
        to: 85.24,
        speaker: "Pete",
        transcript: "I can check that for you"
    },
    {
        from: 85.24,
        to: 88.1,
        speaker: "Jenny",
        transcript: "oh, Thank you",
        actions: [
            {
                confidenceAbbrev:'high',
                icon: 'sms',
                confidence: 93.8,
                stars: [true, true, true, true, true],
                title: 'Send quotes via SMS',
                body: 'I have sent you a quote via SMS for 3 other insurers. Would you like any additional information?',
                triggered: true
            },{
                confidenceAbbrev:'mid',
                icon: 'message',
                confidence: 79.1,
                stars: [true, true, true, false, false],
                title: 'Offer to read out the quotes then email',
                body: '',
                triggered: true
            },{
                confidenceAbbrev:'low',
                icon: 'man-with-speech-bubble',
                confidence: 40,
                stars: [true, false, false, false, false],
                title: 'Offer to read out the quotes',
                body: '',
                triggered: true
            }
        ],
        sentiment: [5,1,1,5,1]
    },
    {
        from: 88.1,
        to: 94.27,
        speaker: "Pete",
        transcript: "I have a quotes via SMS for 3 other insurers. Would you like any additional information?"
    },
    {
        from: 94.27,
        to: 97.1,
        speaker: "Jenny",
        transcript: "No that's fine, thank you",
        actions: [
            {
                confidenceAbbrev:'high',
                icon: 'message',
                confidence: 93.8,
                stars: [true, true, true, true, true],
                title: 'Offer to save quote and email details',
                body: 'I will save the quote for if you decide to proceed and will set up your account with us and email you the details.'
            },{
                confidenceAbbrev:'mid',
                icon: 'save',
                confidence: 79.1,
                stars: [true, true, true, false, false],
                title: 'offer to save quote',
                body: ''
            },{
                confidenceAbbrev:'low',
                icon: 'logout',
                confidence: 40,
                stars: [true, false, false, false, false],
                title: 'close conversation',
                body: ''
            }
        ],
        sentiment: [5,5,5,5,5]
    },
    {
        from: 97.1,
        to: 102,
        speaker: "Pete",
        transcript: "I will save the quote for if you decide to proceed and will set up your account with us and email you the details"
    },
    {
        from: 102,
        to: 103.2,
        speaker: "Jenny",
        transcript: "Thank you",
        sentiment: [1,5,1,1,5]
    }
];
//
const PATH_TO_AUDIO = 'audio/conversation_v2.mp3';
var audio = new Audio(PATH_TO_AUDIO);
// initial sentiments
var sentiments = [0,0,0,0,0];

// scroll the chat body to the bottom
var scrollChat = function() {
    $(".chat-history").stop().animate({ scrollTop: $(".chat-history")[0].scrollHeight}, 100);
}

// update the sentiment indicators
var updateSentiment = function(newSentiment){
    newSentiment.forEach(function(dir,i) {
        var icon = $($($("#sentiment-list li")[i]).find('svg')[1]);
        var noimpact = $($($("#sentiment-list li")[i]).find('.no-impact-text')[0]);
        if (sentiments[i] !== dir) {
            icon.removeClass(['up', 'down', 'centered']);
            if (dir === 5) {
                icon.hide();
                noimpact.show();
            } else {
                noimpact.hide();
                if(dir > 0){
                    icon.addClass('up');
                } else if(dir < 0) {
                    icon.addClass('down');
                } else {
                    icon.addClass('centered');
                }
                icon.show();
            }
            sentiments[i] = dir;
        }
    });
}

// add new suggestions to the suggestion panel
var addSuggestions = function(suggestions) {
    emptySuggestions();
    var template = Handlebars.compile( $('#suggestion-template').html() );
    $('.suggestion-wrapper').append(template({suggestions: suggestions }));

    $('.suggestion').show('slow');

    $(".suggestion .panel-heading").hover(
        function() {
            $(this).parent().find('.panel-collapse').collapse('show');
        }, function() {
            $(this).parent().find('.panel-collapse').collapse('hide');
        }
    );
}

// empty the suggestion panel
function emptySuggestions() {
    $(".suggestion-wrapper").empty();
}

// update the voice recognition
var updateVoiceRecognition = function() {
    $('#recognition-confidence').html(95);
    $('#recognition-confidence').css('color','#3ac461');
    $('#recognition-name').html('Jenny Sarah Meredyth');
}

// add a new node to the conversation panel based on the
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

    // update voice ID
    if (index === 1) updateVoiceRecognition();

    // add suggestions
    if (conversationNode.actions) {
        addSuggestions(conversationNode.actions);
    } else {
        emptySuggestions();
    }

    // update sentiment
    if (conversationNode.sentiment) {
        updateSentiment(conversationNode.sentiment);
    }
}


// start the timer
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
    var timerInterval = setInterval(setTime, 1000);

    $('.action-listening').removeClass('disabled');
    $('.action-not-listening').addClass('disabled');

    var minutesLabel = document.getElementById("timer-minutes");
    var secondsLabel = document.getElementById("timer-seconds");
    var totalSeconds = 0;

    playAudio();
};


function playAudio() {

    function playConversation(arr, index) {
        var time;
        if (index === 0) {
           audio.play();
        } else if (index > 0) {
            addConversationNode(index-1);
        }
        time = (arr[index].to - arr[index].from) * 1000;
        if (index === arr.length + 1) return;
        setTimeout(playConversation, time, arr, index+1)
    }

    setTimeout(playConversation, 1000, conversation, 0)

}

// event when the page loads
$(document).ready(function() {
    // scroll the page
    scrollChat();
});

// click event for starting the conversation
$(document).on('click', '.action-start', startListening);

// click event for ending the conversation
$(document).on('click', '.action-end', function() {
    $('.action-not-listening').removeClass('disabled');
    $('.action-listening').addClass('disabled');
});