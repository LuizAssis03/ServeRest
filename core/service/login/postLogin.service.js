const { spec } = require("pactum");

async function postLogin(email, password, statusCode = 200){
    return await spec()
    .post('https://serverest.dev/login')
    .withBody({
        "email": email,
        "password": password
    })
    .expectStatus(statusCode);
}

module.exports = { postLogin }