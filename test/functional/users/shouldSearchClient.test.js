
const { searchUserById, searchUserByName, searchUserByEmail } = require("../../../core/service/users/getUser.service.js");
const { postUsers } = require("../../../core/service/users/postUser.service.js");
const { TC07 } = require("../../../data/users/users.data.js");
const { assert } = require("chai");

describe('GET - get users', () => {

    let registerUser

    before('create a client', async () => {
        registerUser = await postUsers(TC07);
    })

    it('[TC-07] - should find a client by name', async () => {
        
        let user = await searchUserByName(TC07.name)
        assert.equal(user.usuarios[0].nome, TC07.name, 'O nome é diferente do esperado')
    })

    it('[TC-08] - should find a client by email', async () => {

        let user = await searchUserByEmail(TC07.email)
        assert.equal(user.usuarios[0].email, TC07.email, 'O nome é diferente do esperado')
    })

    
    it('[TC-09] - should find a client by id', async () => {

        let user = await searchUserById(registerUser.json._id)
        assert.equal(user.usuarios[0].nome, TC07.name, 'O nome é diferente do esperado')
        assert.equal(user.usuarios[0].email, TC07.email, 'O nome é diferente do esperado')
    })
})