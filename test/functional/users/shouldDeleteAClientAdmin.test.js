const { assert, expect} = require("chai");
const { postUsers } = require("../../../core/service/users/postUser.service.js");
const { TC06 } = require("../../../data/users/users.data.js");
const { deleteUsers } = require("../../../core/service/users/deleteUser.service.js")

describe('POST - users', () => {

    let user

    before ('register a admin client', async () =>{
        user = await postUsers(TC06);
    })


    it('[TC-06] - delete the admin client using id', async () => {

        let clientDelete = await deleteUsers(user.json._id)
        assert.equal(clientDelete.json.message, TC06.response200, TC06.failmessagedelete)
    })

})