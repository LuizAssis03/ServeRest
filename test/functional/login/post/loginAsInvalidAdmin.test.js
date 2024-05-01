const { postUsers } = require ('../../../../core/service/users/postUser.service.js')
const {  TC13 } = require ('../../../../data/users/users.data.js')
const { postLogin } = require ('../../../../core/service/login/postLogin.service.js')
const { assert, expect } = require('chai')

describe('POST - Login', () =>{

    let registerUser

    before('create a admin user', async () => {

        registerUser = await postUsers(TC13)
        
    })

    it('[TC-17] - Should validate a login as a invalid email', async () =>{

        let userLogin = await postLogin('email', TC13.password, 400)
        assert.equal(userLogin.json.email, TC13.failemail, 'a mensagem é diferente do esperado')

    })

    it('[TC-18] - Should validate a login as a invalid password', async () =>{

        let userLogin = await postLogin(TC13.email, 'password'.password, 400)
        assert.equal(userLogin.json.password, TC13.failpassword, 'a mensagem é diferente do esperado')

    })
})