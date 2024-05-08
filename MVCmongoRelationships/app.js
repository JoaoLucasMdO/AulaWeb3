const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const userRoute = require('./src/routes/usuarioRoute')
app.use(userRoute)

//Configurando a conexão
const mongoose = require('mongoose')
let url = 'mongodb+srv://janmello123:Joao123@fatec.iqytqkv.mongodb.net/?retryWrites=true&w=majority&appName=Fatec'
let mongoDb = process.env.MONGODB_URI || url
mongoose.connect(mongoDb)
mongoose.Promise = global.Promise
let db = mongoose.connection
db.on('error', console.error.bind(console, 'Erro ao conectar ao banco de dados'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.listen(3000, ()=>{
    console.log('Servidor em execução na porta 3000')
})