const expect = require('chai').expect;
const request = require('supertest');
const {app} = require('./../server');

describe('POST /messages', () => {
    it('should create a new message when given valid data', (done) => {
        let title = 'This is an automated test message';
        let body = 'This is a description for the test message';

        request(app)
            .post('/messages')
            .send({title, body})
            .expect(200)
            .expect((res) => {
                expect(res.body.title).to.equal(title);
                expect(res.body.body).to.equal(body);
                expect(res.body.postedAt).to.be.a('string');
            })
            .end(done)
    });

    it('should reject a new message if no title is provided', (done) => {
        let msgNoTitle = {
            body: 'Message with no title'
        };

        request(app)
            .post('/messages')
            .send(msgNoTitle)
            .expect(400)
            .end(done);
    });

    it('should reject a new message if no body is provided', (done) => {
        let msgNoBody = {
            title: 'Message with no body'
        };

        request(app)
            .post('/messages')
            .send(msgNoBody)
            .expect(400)
            .end(done);
    });
});
