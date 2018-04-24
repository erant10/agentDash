var interval = 6000;
var sentimentValue = 30;
Highcharts.chart('container', {
    chart: {
        type: 'spline',
        animation: Highcharts.svg, // don't animate in old IE
        marginRight: 10,
        events: {
            load: function () {
                // set up the updating of the chart each second
                var series = this.series[0];
                var sent_interval = setInterval(function () {
                    sentimentValue += Math.floor(Math.random() * 4) + 1;
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
        formatter: function () {
            return '<b>' + this.series.name + '</b><br/>' +
                Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                Highcharts.numberFormat(this.y, 2) + "%";
        }
    },
    series: [{
        name: 'Sentiment',
        showInLegend: false,
        data: (function () {
            // generate an array of random data
            var data = [],
                time = (new Date()).getTime(),
                i;
            for (i = -4; i <= 0; i += 1) {
                data.push({
                    x: time + 2*i * 1000,
                    y: 35,
                    marker: {
                        symbol: 'url(images/sad.png)'
                    }
                });
            }
            return data;
        }())

    }],
    exporting: { enabled: false },
    credits: {
        enabled: false
    }
});

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

var audio1 = new Audio('audio/1_agent.mp4');
var audio2 = new Audio('audio/2_jenny.mp4');
var audio3 = new Audio('audio/3_agent.mp4');
var audio4 = new Audio('audio/4_jenny.mp4');
var audio5 = new Audio('audio/5_agent.mp4');
var audio6 = new Audio('audio/6_jenny.mp4');

function startSentiment1() {
    var sentiment = 50;
    var interval = setInterval(function(){
        sentiment -= 1;
        if(sentiment < 44){
            clearInterval(interval);
        }
        $('#insight-sentiment').html(sentiment);

    }, 1000);
}
function startSentiment2() {
    var sentiment = 46;
    var interval = setInterval(function(){
        sentiment += 3;
        if(sentiment > 63){
            clearInterval(interval);
        }
        if (sentiment > 50) {
            $('.sentiment-value').css('color','#3ac461');
        }
        $('#insight-sentiment').html(sentiment);

    }, 1000);
}
function startSentiment3() {
    var sentiment = 66;
    var interval = setInterval(function(){
        sentiment += 3;
        if(sentiment > 70){
            clearInterval(interval);
        }
        if (sentiment > 50) {
            $('.sentiment-value').css('color','#3ac461');
        }
        $('#insight-sentiment').html(sentiment);

    }, 1000);
}
function step1() {
    //audio1.play();
}
function step2() {

    var agent_template = Handlebars.compile( $('#message-response-template').html() );
    var $chatHistory = $('.chat-history ul');
    // audio 1 (agent) ended t1+7s
    var context = {
        from: 1,
        to: 1,
        messageOutput: "Hello Jenny! I called you because you didn't respond to the latest quote we sent you",
        time: "now",
        name: "Agent"
    };
    $chatHistory.append(agent_template(context));
    scrollChat();
    //audio2.play();
    startSentiment1();
}
function step3() {
    // audio 2 (jenny) ended
    var user_template = Handlebars.compile( $('#message-template').html() );
    var $chatHistory = $('.chat-history ul');
    addSuggestions1();

    $('.more-info-popover').popover({
        trigger: 'hover'
    });
    $('#recognition-confidence').html(95);
    $('#recognition-confidence').css('color','#3ac461');
    $('#recognition-name').html('Jenny LaMee');

    context = {
        from: 1,
        to: 1,
        messageOutput: "Hello Yes, the last quote you sent is not something that I can afford",
        time: "now",
        name: "Jenny"
    };
    $chatHistory.append(user_template(context));
    scrollChat();
}
function step4() {
    // short delay ended
    //audio3.play();
}
function step5() {
    // audio3 (agent) ended
    emptySuggestions();
    // empty script panel
    $('.script-wrapper').remove();

    var agent_template = Handlebars.compile( $('#message-response-template').html() );
    var $chatHistory = $('.chat-history ul');
    context = {
        from: 1,
        to: 1,
        messageOutput: "OK, You can reduce your premium by one of the following options:\n1. Installing security lighting \n2. Using a safe. \n3. Paying annually.",
        time: "now",
        name: "Agent"
    };
    $chatHistory.append(agent_template(context));
    scrollChat();
    //audio4.play();
    startSentiment2();
}
function step6() {
    // audio4 (jenny) ended
    var user_template = Handlebars.compile( $('#message-template').html() );
    var $chatHistory = $('.chat-history ul');
    addSuggestions2();
    var context = {
        from: 1,
        to: 1,
        messageOutput: "Ok thanks, I actually have a safe in my new apartment",
        time: "now",
        name: "Jenny"
    };
    $chatHistory.append(user_template(context));
    scrollChat();

}
function step7(){
    // short delay ended
    //audio5.play();
}
function step8() {
    var agent_template = Handlebars.compile( $('#message-response-template').html() );
    var $chatHistory = $('.chat-history ul');
    context = {
        from: 1,
        to: 1,
        messageOutput: "Great, I can offer you a monthly insurance premium of £210",
        time: "now",
        name: "Agent"
    };
    $chatHistory.append(agent_template(context));
    scrollChat();
    //audio6.play();
    startSentiment3();

}
function step9() {
    var user_template = Handlebars.compile( $('#message-template').html() );
    var $chatHistory = $('.chat-history ul');
    // audio6 ended (jenny)
    var context = {
        from: 1,
        to: 1,
        messageOutput: "That’s Great! Thank you very much\n",
        time: "now",
        name: "Jenny"
    };
    $chatHistory.append(user_template(context));
    scrollChat();
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
                                        scrollChat();
                                    }, 4000)
                                }, 8000)
                            }, 4000)
                        }, 3000)
                    }, 12000);
                }, 4000)
            }, 6000)
        }, 7000)
    }, 1000)

}