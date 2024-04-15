const { spec } = require("pactum");

async function getUser(parameter, parameterValue, statuscode = 200){
    return await spec()
    .get('https://serverest.dev/usuarios')
    .withQueryParams(parameter, parameterValue)
    .expectStatus(statuscode)
}

async function searchUserByName(nome) {
    let user = await getUser('nome', nome)
    return user.json
}

async function searchUserByEmail(email) {
    let user = await getUser('email', email)
    return user.json
}

async function searchUserById(id) {
    let user = await getUser('_id', id)
    return user.json
}

module.exports = { getUser, searchUserByName, searchUserByEmail, searchUserById }