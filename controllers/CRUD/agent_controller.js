const Agent = require('../../models/agent');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const messages = require('./messages');

// const debug = require('../../debug');

module.exports = {

    create(req, res, next) {
        // the data in the body of the request npm
        var agentProps = req.body;
        Agent.findOne({ username: agentProps.username})
            // check if the username is taken
            .then( agent => {
                if (agent !== null) {
                    // username taken
                    res.status(400).send(messages.USERNAME_TAKEN(agentProps.username))
                } else {
                    if (agentProps.password !== undefined) {
                        // hash password
                        bcrypt.hash(agentProps.password, saltRounds, function (err, hash) {
                            if (!err) {
                                // create user
                                agentProps.password = hash;
                                Agent.create(agentProps)
                                    .then(agent => res.send(agent))
                                    .catch(next);
                            } else {
                                res.send(err);
                            }
                        });
                    } else {
                        // password === undefined
                        res.status(400).send(messages.USER_AND_PASS_REQUIRED);
                    }
                }
            })
            .catch(err => res.send(err));
    },

    getOneById(req, res, next) {
        const agentId = req.params.id;
        Agent.findOne({ _id: agentId })
            .then((agent) => res.send(agent))
            .catch(next)
    },

    edit(req, res, next) {
        const agentId = req.params.id;
        const agentProps = req.body;
        Agent.findByIdAndUpdate({_id: agentId}, agentProps)
            .then(() => Agent.findById({_id: agentId}))
            .then(agent => res.send(agent))
            .catch(next);
    },

    delete(req, res, next) {
        const agentId = req.params.id;
        Agent.findByIdAndRemove({ _id: agentId })
            // send the response with a status of 204 (successflly deleted)
            .then(agent => res.status(204).send(agent))
            .catch(next);
    },

    authenticate(req, res, next) {
        const credentials = req.body;
        if (credentials.username && credentials.password) {
            Agent.findOne({ username: credentials.username})
                .then( agent => {
                    if (agent !== null) {
                        bcrypt.compare(credentials.password, agent.password, (err,match) => {
                            if (match) {
                                // Login successful
                                res.send(messages.LOGIN_SUCCESS(credentials.username));
                            } else {
                                if (err) { console.log(err) };
                                res.status(401).send(messages.INVALID_CREDENTIALS);
                            }
                        })
                    } else {
                        res.status(401).send(messages.INVALID_CREDENTIALS);
                    }
                })
                .catch(err => res.send(err));
        } else {
            res.status(401).send(messages.USER_AND_PASS_REQUIRED);
        }
    }
};