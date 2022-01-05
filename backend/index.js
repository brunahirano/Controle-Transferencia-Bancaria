require('./config/conexao')// no mysql não precisa de uma variável para fazer o require
const express = require('express')
const app = express()
const porta = 3000

//utilizar arquivos no formato json, tráfego de arquivo no formato json
app.use(express.json())

const rotasContas = require('./rotas') // variável para armazenar todas as rotas defonodas no arquivo rotas.js

app.use('/contas', rotasContas) //todas as vezes que vier desse arquivo rotas.js para /tarefas


app.listen(porta, ()=>{
    console.log('Servidor está rodando')
})
