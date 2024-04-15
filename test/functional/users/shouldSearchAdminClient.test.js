
const { getUser, searchUserById, searchUserByName, searchUserByEmail } = require("../../../core/service/users/getUser.service.js");
const { postUsers } = require("../../../core/service/users/postUser.service.js");
const { TC07, TC08 } = require("../../../data/users/users.data.js");
const { assert, expect } = require("chai");

describe('GET - get users', () => {

    let registerUser

    before('create a user', async () => {
        registerUser = await postUsers(TC08);
    })

    it('[TC-08] - should find a admin client by name', async () => {
        
        let user = await searchUserByName(TC08.name)
        assert.equal(user.usuarios[0].nome, TC08.name, 'O nome é diferente do esperado')
        console.log(user)
    })

    it('[TC-09] - should find a admin client by email', async () => {

        let user = await searchUserByEmail(TC08.email)
        assert.equal(user.usuarios[0].email, TC08.email, 'O nome é diferente do esperado')
        console.log(user)
    })

    
    it('[TC-10] - should find a admin client by id', async () => {

        let user = await searchUserById(registerUser.json._id)
        assert.equal(user.usuarios[0].nome, TC08.name, 'O nome é diferente do esperado')
        assert.equal(user.usuarios[0].email, TC08.email, 'O nome é diferente do esperado')
        console.log(user)
    })
})