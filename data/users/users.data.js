const { faker } = require('@faker-js/faker');

const TC01 = {
    name: faker.person.fullName({
        firstName: 'tc01'
    }),

    email: faker.internet.email({
        firstName: 'tc01'
    }),

    password: faker.internet.password({
        length: 6
    }),

    admin: 'false',

    response201: 'Cadastro realizado com sucesso',
    response400: 'Este email já está sendo usado',
    failmessage: 'a menssagem é diferente do esperado'
}

const TC02 = {
    name: faker.person.fullName({
        firstName: 'TC02'
    }),

    email: faker.internet.email({
        firstName: 'TC02'
    }),

    password: faker.internet.password({
        length: 6
    }),

    admin: 'true',

    response201: 'Cadastro realizado com sucesso',
    response400: 'Este email já está sendo usado',
    failmessage: 'a menssagem é diferente do esperado'
}

const TC03 = {
    name: faker.person.fullName({
        firstName: 'TC03'
    }),

    email: faker.internet.email({
        firstName: 'TC03'
    }),

    password: faker.internet.password({
        length: 6
    }),

    admin: 'true',

    response201: 'Cadastro realizado com sucesso',
    response400: 'Este email já está sendo usado',
    failmessage: 'a menssagem é diferente do esperado'
}

const TC04 = {
    name: faker.person.fullName({
        firstName: 'TC04'
    }),

    email: faker.internet.email({
        firstName: 'TC04'
    }),

    password: faker.internet.password({
        length: 6
    }),

    admin: 'false',

    response201: 'Cadastro realizado com sucesso',
    response400: 'Este email já está sendo usado',
    failmessage: 'a menssagem é diferente do esperado'
}

const TC05 = {
    name: faker.person.fullName({
        firstName: 'TC05'
    }),

    email: faker.internet.email({
        firstName: 'TC05'
    }),

    password: faker.internet.password({
        length: 6
    }),

    admin: 'false',

    response201: 'Cadastro realizado com sucesso',
    response400: 'Este email já está sendo usado',
    failmessage: 'a menssagem é diferente do esperado',
    response200: 'Registro excluído com sucesso',
    failmessagedelete: 'A mensagem é diferente do esperado'
}

const TC06 = {
    name: faker.person.fullName({
        firstName: 'TC06'
    }),

    email: faker.internet.email({
        firstName: 'TC06'
    }),

    password: faker.internet.password({
        length: 6
    }),

    admin: 'true',

    response201: 'Cadastro realizado com sucesso',
    response400: 'Este email já está sendo usado',
    failmessage: 'a menssagem é diferente do esperado',
    response200: 'Registro excluído com sucesso',
    failmessagedelete: 'A mensagem é diferente do esperado'
}

const TC07 = {
    name: faker.person.fullName({
        firstName: 'TC07'
    }),

    email: faker.internet.email({
        firstName: 'TC07'
    }),

    password: faker.internet.password({
        length: 6
    }),

    admin: 'false',

    response201: 'Cadastro realizado com sucesso',
    response400: 'Este email já está sendo usado',
    failmessage: 'a menssagem é diferente do esperado',
    response200: 'Registro excluído com sucesso',
    failmessagedelete: 'A mensagem é diferente do esperado'
}

module.exports = { TC02, TC01, TC03, TC04, TC05, TC06, TC07 }
