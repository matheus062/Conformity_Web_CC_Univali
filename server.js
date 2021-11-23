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



// Essa rota é acessa pelo clientes.html na tag <script>
app.get('/', async(req, res) => {

    const { data } =  await axios('https://jsonplaceholder.typicode.com/users')

   
    return res.json(
        data
    )

})


app.listen('7777')