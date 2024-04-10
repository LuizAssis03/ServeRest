const { assert, expect } = require("chai");
const { postUsers } = require("../../../core/service/users/postUser.service.js");
const { TC04 } = require("../../../data/users/users.data.js");

describe('POST - users', () => {

    let user
    
    before ('should register a client', async () =>{
        user = await postUsers (TC04)
        
    })

    it('register a repeat client', async () => {
        let newUser = await postUsers(TC04, 400);
        assert.equal(newUser.json.message, TC04.response400, TC04.failmessage);
        
    })


})