const { postUsers } = require ('../../../../core/service/users/postUser.service.js')
const { TC10 } = require ('../../../../data/users/users.data.js')
const { postLogin } = require ('../../../../core/service/login/postLogin.service.js')
const { assert, expect } = require('chai')

describe('POST - Login', () =>{

    let registerUser

    before('create a client user', async () => {

        registerUser = await postUsers(TC10)
    })

    it('[TC-13] - Should validate a login as a Client', async () =>{

        let userLogin = await postLogin(TC10.email, TC10.password)
        assert.equal(userLogin.json.message, TC10.response200, 'o email é diferente do esperado')
        expect(userLogin.json).to.have.property('authorization')
        expect(userLogin.json.authorization).to.be.a('string')

    })
})