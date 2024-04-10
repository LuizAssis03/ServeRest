const { spec } = require("pactum");

async function deleteUsers( id, statusCode = 200){
    return await spec()
    .delete('https://serverest.dev/usuarios/{_id}')
    .withPathParams('_id', id)
    .expectStatus(statusCode)
}

module.exports = {deleteUsers}