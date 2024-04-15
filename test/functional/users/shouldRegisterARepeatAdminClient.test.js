const { assert, expect } = require("chai");
const { postUsers } = require("../../../core/service/users/postUser.service.js");
const { TC03 } = require("../../../data/users/users.data.js");

describe('POST - users', () => {
    let user
    before('create a admin client', async () =>{
        user = await postUsers(TC03);
    })

    it('[TC-03] - register a repeat admin client', async () => {
        let newUser = await postUsers(TC03, 400);
        assert.equal(newUser.json.message, TC03.response400, TC03.failmessage);
    })


})