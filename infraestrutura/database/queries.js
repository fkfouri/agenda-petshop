const conexao = require('../conexao')

const executaQuery = (query) => {
  return new Promise((resolve, reject) => {
    return conexao.query(query, (erro, resultados, campos) => {
      console.log('executou a query!')
      if (erro) { 
        reject(erro)
      } 
      resolve(resultados )
    })
  })
  

  //return conexao.query(query, (erro, resultados, campos) => {
  //  if (erro) {
  //    return erro
  //  } else {
  //    return resultados
  //  }
  //
  // console.log('executou a query!')
  //})
}

module.exports = executaQuery
