const { assert, expect} = require("chai");
const { postUsers } = require("../../../core/service/users/postUser.service.js");
const { TC06 } = require("../../../data/users/users.data.js");
const { deleteUsers } = require("../../../core/service/users/deleteUser.service.js")

describe('POST - users', () => {

    let user

    before ('register a admin client', async () =>{
        user = await postUsers(TC06);
        assert.equal(user.json.message, TC06.response201, TC06.failmessage);
        expect(user.json).to.have.property('_id');
        expect(user.json._id).to.have.lengthOf(16)
        expect(user.json._id).to.be.a('string');
    })


    it('delete the admin client', async () => {

        let clientDelete = await deleteUsers(user.json._id)
        assert.equal(clientDelete.json.message, TC06.response200, TC06.failmessagedelete)
    })

})