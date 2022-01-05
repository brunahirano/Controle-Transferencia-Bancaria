const rotas = require('express').Router()

const conexao = require('./config/conexao')


//rota para listar os dados do database

rotas.get('/', (req,res)=>{
    //criando uma query para selecionar todos os dados (*) da tabela tb_tarefas
    //order by o nome do parâmetro, no nosso exemplo temos descricao e obs, asc é ordem crescente
    let sql = 'select * from tb_contas'
    //query é um comando do mysql para criar essa query usa o camando sql para selecionar toda tb_tarefas
    conexao.query(sql, (erro, rows, fields)=>{ //fields(colunas) rows(linhas)
        if(erro)throw erro
        res.json(rows)
    }) //query é um comando do mysql para criar essa query sql acima
})

//rota para mostrar apenas uma tarefa de acordo com o seu id
rotas.get('/:id', (req,res)=>{
    const {id} = req.params
    //estou selecionando todos os campos da tabela tb_tarefas where(onde) tem o id_tarefas = ?
    let sql = `select * from tb_contas where id_transferencia = ${id}`
    // id em [ ] vai substituir a ?, esse id é o mesmo passado como parâmetro na url
    conexao.query(sql, [id], (erro, rows, fields)=>{ //fields(colunas) rows(linhas)
        if(erro)throw erro
        res.json(rows[0])
    })
})

//rota para deletar uma tarefa específica (através do seu id), uso médoto delete
rotas.delete('/:id', (req,res)=>{
    const {id} = req.params
    let sql = `delete from tb_contas where id_transferencia = ${id}`
    conexao.query(sql, (erro, rows, fields)=>{
        if(erro)throw erro
        res.json({status:"Conta excluida com sucesso"})
    })
})

//essa rota é para fazer uma inclusão na tabela de tarefas, uso método post
rotas.post('/', (req,res)=>{
    const {nomeCliente, valor, contaCliente} = req.body
    let sql = `insert into tb_contas(nomeCliente, valor, contacliente) values('${nomeCliente}', '${valor}', '${contaCliente}')`
    conexao.query(sql,(erro, rows, fields)=>{
        if(erro)throw erro
        res.json({status:"Conta inserida com sucesso"})
    })
})

rotas.put('/:id', (req,res)=>{
    const {id} = req.params
    const {nomeCliente, valor, contaCliente} = req.body
    let sql = `update tb_contas set 
                nomeCliente = '${nomeCliente}',
                valor = '${valor}',
                contaCliente = '${contaCliente}'
                where id_transferencia = '${id}'`
    conexao.query(sql, (erro, rows, fields)=>{
        if (erro) throw erro
        res.json({status: "Conta editada com sucesso"})
    })
})


module.exports = rotas
