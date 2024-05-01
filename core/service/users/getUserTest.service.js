const { spec } = require("pactum");

async function getUserTest(id, statuscode = 200){
    return await spec()
    .get('https://serverest.dev/usuarios/{_id}')
    .withPathParams('_id', id)
    .expectStatus(statuscode)
}

module.exports = { getUserTest }


