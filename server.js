//Libs
//Libera as api se comunicarem
const cors = require('cors')
//
const express =  require('express')
//
const app =  express()
//
const axios = require("axios")
const { response } = require('express')

app.use(cors())


//ROTAS


// CLIENTE
//Variaveis => id, nome, cnpj, endereco, idCidade, telefone1, telefone2
app.get('/clientes', async(req, res) => {
    //Lista todos os clientes
    try {
        const { data } =  await axios('https://jsonplaceholder.typicode.com/users')
        console.log(data)
    
        return res.json(data)

    }catch (error){
        console.log(error)
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
        console.log(data)
        
        return res.json(data)

    try {
        //Tenta pegar informacoes das tasks
        
    }catch (error){

    }



})










app.listen('7777')