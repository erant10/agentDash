'use strict';
// global window.fetch pollyfill for IE/Edge & Older Chrome/FireFox
require('whatwg-fetch');
const watsonSpeech = require('watson-speech');
const $ = require('jQuery');


// Constants
const GET_TOKEN_URL = 'http://localhost:8800/watson/token',
    SELECTORS = {
        tempContent: '#temp_content',
        startButton: '#start',
        stopButton: '#stop'
    };

$(document).on('click', SELECTORS.startButton, function () {

    fetch(GET_TOKEN_URL)
        .then(function(response) {
            return response.text();
        }).then(function (token) {

        var stream = watsonSpeech.SpeechToText.recognizeMicrophone({
            token: token,
            outputElement: SELECTORS.tempContent, // CSS selector or DOM Element
            resultsBySpeaker: true
        });

        stream.on('data', function(data) {
            console.log(data);
        });

        stream.on('error', function(err) {
            console.log(err);
        });

        $(document).on('click', SELECTORS.stopButton, function () {
            stream.stop();
        });

    }).catch(function(error) {
        console.log(error);
    });
});

