const mysql = require('mysql')

const conexao = mysql.createConnection({
  host: 'lnx1250in.sjk.emb',
  port: 3306,
  user: 'root',
  password: 'admin',
  database: 'agenda-petshop'
})

module.exports = conexao
