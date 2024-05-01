const { postUsers } = require ('../../../../core/service/users/postUser.service.js')
const { TC12 } = require ('../../../../data/users/users.data.js')
const { postLogin } = require ('../../../../core/service/login/postLogin.service.js')
const { assert, expect } = require('chai')

describe('POST - Login', () =>{

    let registerUser

    before('create a admin user', async () => {

        registerUser = await postUsers(TC12)
    })

    it('[TC-16] - Should validate a login as a Admin', async () =>{

        let userLogin = await postLogin(TC12.email, TC12.password)
        assert.equal(userLogin.json.message, TC12.response200, 'o email é diferente do esperado')
        expect(userLogin.json).to.have.property('authorization')
        expect(userLogin.json.authorization).to.be.a('string')

    })
})