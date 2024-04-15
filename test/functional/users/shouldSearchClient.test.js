
const { getUser, searchUserById, searchUserByName, searchUserByEmail } = require("../../../core/service/users/getUser.service.js");
const { postUsers } = require("../../../core/service/users/postUser.service.js");
const { TC07 } = require("../../../data/users/users.data.js");
const { assert, expect } = require("chai");

describe('POST - get users', () => {

    let registerUser
    let reponse

    before('create a user', async () => {
        registerUser = await postUsers(TC07);
    })

    it('[TC-07] - should find a user by name', async () => {
        
        let user = await searchUserByName(TC07.name);
        assert.equal(user.usuarios[1], TC07.name, "O nome é diferente do esperado")
        console.log(user)

    })

    // it('[TC-08] - should find a user by email', async () => {

    //     let reponse = await searchUserByEmail(TC07.email)
    //     console.log(reponse)

    // })

    
    // it('[TC-09] - should find a user by id', async () => {

    //     let reponse = await searchUserById(Registeruser.json._id)
    //     console.log(reponse)

    // })
})