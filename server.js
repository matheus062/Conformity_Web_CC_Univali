//Libs
//Libera as api se comunicarem
const database = require('./intranetServer/db');
//
const cors = require('cors')
//
const bodyParser = require('body-parser')
//
const express =  require('express')
//
const app =  express()
//
const axios = require("axios")
const { response } = require('express')

app.use(cors())

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


// CLIENTE
//Variaveis => id, nome, cnpj, endereco, idCidade, telefone1, telefone2
app.get('/clientes', async(req, res) => {
    //Lista todos os clientes
        const cliente = require('./intranetServer/cliente');
        
        try {
            const resultado = await database.sync();
            const Clientes = await cliente.findAll();
            return res.json(Clientes);
        } catch (error) {
            console.log(error);
        }

})

//Cliente by ID
app.get('/clientes/:id', async (req, res) => {
    try {
        const { data } =  await axios ('https://jsonplaceholder.typicode.com/users/' +  req.params.id)


        return res.json(data)
   
    }catch (error){

    }


})

app.post('/addclientes', async (req, res) => {
    try {
    const database = require('./intranetServer/db');
    const Cliente = require('./intranetServer/cliente');

        try {
            const resultado = await database.sync();
            Cliente.create({
                nome: req.body.nome,
                cnpj: req.body.cnpj,
                endereco: req.body.logradouro,
                cidade: req.body.cidade,
                telefone1: req.body.tel1,
                telefone2: req.body.tel2
            })
            console.log(resultado);
        } catch (error) {
            console.log(error);
        }

        const resultadoCreate = await Cliente.create({
            req
        })
        console.log(resultadoCreate);
    }catch(error) {
        console.log(error);
    }
})







//TAREFAS
//Varivaeis => id, nivelUrgencia, titulo, descricao, dataTarefa
app.get("/tarefas", async (req, res) =>{
    let taskData =  ""

    try {
        //
        
    }catch (error){

    }



})

//INSPETORES
//Variaveis =>  id, nome, cnpj, endereco, idCidade, telefone1, telefone2
app.get("/inspetores", async (req, res) =>{
   

    try {
        //Tenta pegar informacoes das tasks
        
    }catch (error){

    }



})


//INSPECOES
//Variaveis => id, status, idInspetor, idCliente, armazem, produto, destino, descricao, dataInspecao, dataInclusao
//
app.get("/inspecoes", async (req, res) =>{
        const { data } =  await axios('https://jsonplaceholder.typicode.com/todos')
        //console.log(data)
        
        return res.json(data)

    try {
        //Tenta pegar informacoes das tasks
        
    }catch (error){

    }



})










app.listen('7777')