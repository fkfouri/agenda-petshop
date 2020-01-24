const executaQuery = require('../database/queries')

class Cliente {
  lista(res) {
    const sql = 'SELECT * FROM Clientes'

    return executaQuery( sql)
  }

  buscaPorId( id) {
    const sql = `SELECT * FROM Clientes WHERE id=${id}`

    return executaQuery( sql).then(cliente => cliente[0])
  }

  adiciona( item) {
    const { nome, cpf } = item
    const sql = `INSERT INTO Clientes(nome, CPF) VALUES('${nome}', '${cpf}')`

    //return executaQuery( sql)
    
    //return executaQuery( sql).then(resposta =>{
    //  console.log(resposta)
    //  return reposta
    //})

    return executaQuery( sql).then(resposta => 
      ({
        nome,
        cpf,
        id : resposta.insertId
      })
    )
  }

  atualiza( novoItem, id) {
    const { nome, cpf } = novoItem
    const sql = `UPDATE Clientes SET nome='${nome}', CPF='${cpf}' WHERE id=${id}`

    return executaQuery( sql)
  }

  deleta( id) {
    const sql = `DELETE FROM Clientes WHERE id=${id}`

    return executaQuery( sql)
  }
}

module.exports = new Cliente
