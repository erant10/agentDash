const app = require('../app');
const request = require('supertest');
const assert = require('assert');

describe('Watson Speech Services', () => {
    it('GET to /watson/token requests an auth token from watson speech to text api', (done) => {
        request(app)
            .get('/watson/token')
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                done();
            });
    });
});
