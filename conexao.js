const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: 'localhost', 
    user: 'root', //usuário padrão do Mysql
    password: 'S1l51a28#',
    port: 3306,
    database: 'db_banco'
})

conexao.connect((erro)=>{
    if(erro) throw erro

    console.log('Estamos conectados com a base de dados')
})

module.exports = conexao