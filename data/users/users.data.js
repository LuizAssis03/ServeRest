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

const TC08 = {
    name: faker.person.fullName({
        firstName: 'TC08'
    }),

    email: faker.internet.email({
        firstName: 'TC08'
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

const TC09 = {
    name: faker.person.fullName({
        firstName: 'TC09'
    }),

    email: faker.internet.email({
        firstName: 'TC09'
    }),

    password: faker.internet.password({
        length: 6
    }),

    admin: 'false',

    response200: 'Cadastro realizado com sucesso',
    response400: 'Este email já está sendo usado',
    failmessage: 'a menssagem é diferente do esperado',
    failmessagedelete: 'A mensagem é diferente do esperado'
}

const TC10 = {
    name: faker.person.fullName({
        firstName: 'TC10'
    }),

    email: faker.internet.email({
        firstName: 'TC10'
    }),

    password: faker.internet.password({
        length: 6
    }),

    admin: 'false',

    response200: 'Login realizado com sucesso',
    response400: 'Este email já está sendo usado',
    failmessage: 'a menssagem é diferente do esperado',
    failmessagedelete: 'A mensagem é diferente do esperado'
}

const TC11 = {
    name: faker.person.fullName({
        firstName: 'TC11'
    }),

    email: faker.internet.email({
        firstName: 'TC11'
    }),

    password: faker.internet.password({
        length: 6
    }),

    admin: 'false',

    response200: 'Login realizado com sucesso',
    response400: 'Este email já está sendo usado',
    failemail: 'email deve ser um email válido',
    failpassword: 'password é obrigatório',
    failmessagedelete: 'A mensagem é diferente do esperado'
}

const TC12 = {
    name: faker.person.fullName({
        firstName: 'TC12'
    }),

    email: faker.internet.email({
        firstName: 'TC12'
    }),

    password: faker.internet.password({
        length: 6
    }),

    admin: 'true',

    response200: 'Login realizado com sucesso',
    response400: 'Este email já está sendo usado',
    failemail: 'email deve ser um email válido',
    failpassword: 'password é obrigatório',
    failmessagedelete: 'A mensagem é diferente do esperado'
}

const TC13 = {
    name: faker.person.fullName({
        firstName: 'TC13'
    }),

    email: faker.internet.email({
        firstName: 'TC13'
    }),

    password: faker.internet.password({
        length: 6
    }),

    admin: 'true',

    response200: 'Login realizado com sucesso',
    response400: 'Este email já está sendo usado',
    failemail: 'email deve ser um email válido',
    failpassword: 'password é obrigatório',
    failmessagedelete: 'A mensagem é diferente do esperado'
}

const TC14 = {
    name: faker.person.fullName({
        firstName: 'TC14'
    }),

    email: faker.internet.email({
        firstName: 'TC14'
    }),

    password: faker.internet.password({
        length: 6
    }),

    admin: 'true',

    response200: 'Login realizado com sucesso',
    response400: 'Este email já está sendo usado',
    failmessage: 'Email e/ou senha inválidos',
    failmessagedelete: 'A mensagem é diferente do esperado'
}

module.exports = { TC02, TC01, TC03, TC04, TC05, TC06, TC07, TC08, TC09, TC10, TC11, TC12, TC13, TC14 }
