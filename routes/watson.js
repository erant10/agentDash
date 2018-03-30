/**
 * Routes for /watson
 */
var express = require('express');
var router = express.Router();
const requestPromise = require("request-promise");
const config = require('config');

/* GET token from watson apis page. */
router.get('/token', function(req, res, next) {
    // Check if the configuration file contains Watson speech to text credentials
    const CredentialsConfigValue = "ibm.APIs.0.speechToText.credentials";
    if (config.has(CredentialsConfigValue)) {
        const watsonSttCredentials = config.get(CredentialsConfigValue),
            username = watsonSttCredentials.username,
            password = watsonSttCredentials.password,
            auth = "Basic " + new Buffer(username + ":" + password).toString("base64"),
            url = config.get("ibm").host + "/authorization/api/v1/token?url=" +
                config.get("ibm").host + watsonSttCredentials.suffix;
        var options = {
            method: 'GET',
            url : url,
            headers : {
                "Authorization" : auth
            }
        };
        // request a token from
        requestPromise(options)
            .then(authToken => {
                res.send(authToken);
            })
            .catch(function (err) {
                // authentication failed
                console.error(err);
                return new Promise((resolve, reject) => {
                    reject(err)
                });
            });

    } else {
        const err = new Error('Error: No Credentials were found');
        res.status(500);
        console.error(err);
        res.render('error', { error: err })
    }

});

module.exports = router;
