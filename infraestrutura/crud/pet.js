const executaQuery = require('../database/queries')

class Pet {
  lista() {
    const sql = 'SELECT Pets.*, Clientes.nome as nomeDono, Clientes.cpf, Clientes.id as donoId FROM Pets INNER JOIN Clientes ON Pets.donoID = Clientes.iD'

    return executaQuery(sql).then(pets =>
      pets.map( pet =>({
        id: pet.id,
        nome: pet.id,
        tipo: pet.tipo,
        observacoes: pet.observacoes,
        dono: {
          cpf: pet.cpf,
          nome: pet.nomeDono,
          id: pet.donoId
        }
    
      })
      ))
  }

  buscaPorId(id) {
    const sql = `SELECT * FROM Pets WHERE id=${parseInt(id)}`

    return executaQuery(sql)
  }

  adiciona(item) {
    const { nome, donoId, tipo, observacoes } = item

    const sql = `INSERT INTO Pets(nome, donoId, tipo, observacoes) VALUES('${nome}', ${donoId}, '${tipo}', '${observacoes}')`

    return executaQuery(sql).then(coisa => ({
      nome,
      donoId,
      tipo,
      observacoes,
      id : coisa.insertId
    }))

  }

  atualiza(novoItem, id) {
    const { nome, dono, tipo, observacoes } = novoItem

    const sql = `UPDATE Pets SET nome='${nome}', donoId=${dono}, tipo='${tipo}', observacoes='${observacoes}' WHERE id=${id}`

    return executaQuery(sql)
  }

  deleta(id) {
    const sql = `DELETE FROM Pets WHERE id=${id}`

    return executaQuery(sql)
  }
}

module.exports = new Pet
