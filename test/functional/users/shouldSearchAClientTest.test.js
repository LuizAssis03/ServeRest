
const { getUserTest} = require("../../../core/service/users/getUserTest.service.js");

const { postUsers } = require("../../../core/service/users/postUser.service.js");
const { TC09 } = require("../../../data/users/users.data.js");
const { assert } = require("chai");

describe('GET - get users', () => {

    let registerUser

    before('create a user', async () => {
        registerUser = await postUsers(TC09);
        // console.log(registerUser)
    })

    it('[TC-11] - should find a client by id', async () => {        
        let user = await getUserTest(registerUser.json._id)
    })

})