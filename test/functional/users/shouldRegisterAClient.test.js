const { postUsers } = require("../../../core/service/users/postUser.service.js");
const { TC01 } = require("../../../data/users/users.data.js");
const { assert, expect } = require("chai");

describe('POST - users', () => {

    it('register a client', async () => {
        let newUser = await postUsers(TC01);
        assert.equal(newUser.json.message, TC01.response201, TC01.failmessage);
        expect(newUser.json).to.have.property('_id');
        expect(newUser.json._id).to.have.lengthOf(16)
        expect(newUser.json._id).to.be.a('string');

    })

})