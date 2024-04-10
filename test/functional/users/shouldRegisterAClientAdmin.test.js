const { assert, expect } = require("chai");
const { postUsers } = require("../../../core/service/users/postUser.service.js");
const { TC02 } = require("../../../data/users/users.data.js");

describe('POST - users', () => {

    it('register a admin client', async () => {
        let newUser = await postUsers(TC02);
        assert.equal(newUser.json.message, TC02.response201, TC02.failmessage);
        expect(newUser.json).to.have.property('_id');
        expect(newUser.json._id).to.have.lengthOf(16)
        expect(newUser.json._id).to.be.a('string');
        
    })


})