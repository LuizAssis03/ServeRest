const { assert, expect} = require("chai");
const { postUsers } = require("../../../core/service/users/postUser.service.js");
const { TC05 } = require("../../../data/users/users.data.js");
const { deleteUsers } = require("../../../core/service/users/deleteUser.service.js")

describe('POST - users', () => {

    let user

    before ('register a client', async () =>{
        user = await postUsers(TC05);
    })


    it('[TC-05] - delete the client using id', async () => {

        let clientDelete = await deleteUsers(user.json._id)
        assert.equal(clientDelete.json.message, TC05.response200, TC05.failmessagedelete)
    })

})