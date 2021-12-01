
(async () => {
    const database = require('./db');

    const Cliente = require('./cliente');

    try {
        const resultado = await database.sync();
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }

    const resultadoCreate = await Cliente.create({
        nome: 'Joãozinho',
        cnpj: '11111111111111',
        endereco: 'Rua teste',
        cidade: 'Itajai',
        telefone1: '(47)3334-4444',
        telefone2: '(47)99999-0000'
    })
    console.log(resultadoCreate);

})();