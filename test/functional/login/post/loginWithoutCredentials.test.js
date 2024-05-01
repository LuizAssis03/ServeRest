const { postUsers } = require ('../../../../core/service/users/postUser.service.js')
const { TC14 } = require ('../../../../data/users/users.data.js')
const { postLogin } = require ('../../../../core/service/login/postLogin.service.js')
const { assert, expect } = require('chai')

describe('POST - Login', () =>{

    it('[TC-13] - Should validate a login without credentials', async () =>{

        let userLogin = await postLogin(TC14.email, TC14.password, 401)
        assert.equal(userLogin.json.message, TC14.failmessage, 'o email é diferente do esperado')
    })
})