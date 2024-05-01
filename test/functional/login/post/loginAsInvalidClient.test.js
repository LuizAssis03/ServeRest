const { postUsers } = require ('../../../../core/service/users/postUser.service.js')
const { TC10, TC11 } = require ('../../../../data/users/users.data.js')
const { postLogin } = require ('../../../../core/service/login/postLogin.service.js')
const { assert, expect } = require('chai')

describe('POST - Login', () =>{

    let registerUser

    before('create a client user', async () => {

        registerUser = await postUsers(TC11)
    })

    it('[TC-14] - Should validate a login as a invalid email', async () =>{

        let userLogin = await postLogin('email', TC11.password, 400)
        assert.equal(userLogin.json.email, TC11.failemail, 'a mensagem é diferente do esperado')

    })

    it('[TC-15] - Should validate a login as a invalid password', async () =>{

        let userLogin = await postLogin(TC11.email, 'password'.password, 400)
        assert.equal(userLogin.json.password, TC11.failpassword, 'a mensagem é diferente do esperado')

    })
})