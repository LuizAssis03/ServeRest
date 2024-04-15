const { spec } = require("pactum");

async function postUsers(data, statusCode = 201) {
    return await spec()
        .post('https://serverest.dev/usuarios')
        .withBody({
            "nome": data.name,
            "email": data.email,
            "password": data.password,
            "administrador": data.admin,

        })
        .expectStatus(statusCode);
}

module.exports = { postUsers }