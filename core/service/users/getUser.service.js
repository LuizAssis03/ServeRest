const { spec } = require("pactum");

async function getUser(parameter, parameterValue, statuscode = 200){
    return await spec()
    .get('https://serverest.dev/usuarios')
    .withPathParams(parameter, parameterValue)
    .expectStatus(statuscode)
}

async function searchUserByName(name) {
    let userName = await getUser('name', name)
    return userName.json
}

async function searchUserByEmail(email) {
    let userEmail = await getUser('email', email)
    return userEmail.json
}

async function searchUserById(id) {
    let userId = await getUser('_id', id)
    return userId.json
}

module.exports = { getUser, searchUserByName, searchUserByEmail, searchUserById }