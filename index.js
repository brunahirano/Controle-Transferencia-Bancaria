// Atividade:
// Começar uma aplicação nova como essa que acabamos de terminar o backend.
// Nessa atividade vocês devem criar o backend de uma aplicação.
// Essa aplicação vai gerenciar as transferências de uma conta bancária. Para isso, vocês devem criar um novo database com uma tabelas com os seguintes campos: id_tranferencia, nomeCliente, valor, contaCliente.
// Na construção desse backend vocês desenvolver todo o crud para esse data base. 

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