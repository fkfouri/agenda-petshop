const { GraphQLServer } = require('graphql-yoga')
//const customExpress = require('./config/custom-express')
const conexao = require('./infraestrutura/conexao')
const Tabelas = require('./infraestrutura/database/tabelas')
const Operacoes = require('./infraestrutura/operations')


//const app = customExpress()

conexao.connect(erro => {
  if (erro) {
    console.log(erro)
  }

  console.log('conectou no banco')

  Tabelas.init(conexao)
})

//app.listen(4000, () => {
//  console.log('Servidor rodando na porta 4000')
//})

const Clientes = new Operacoes('cliente')
const resolvers= {
  Query : {
    status: () => "servidor rodando!",
    clientes: () => Clientes.lista(),
    cliente: (root, {id}) => Clientes.buscaPorId( id )
    //status : "resolver funcionando"
  },
  Mutation:{
    //adicionarCliente : (root, params) => ({
    //  id: 3,
    //  nome: params.nome,
    //  cpf: params.cpf
    //}) 

    adicionarCliente : (root, params) => Clientes.adiciona(params)
  }
}

const servidor = new GraphQLServer({
  resolvers: resolvers,
  typeDefs : './schema.graphql'

})

servidor.start(() => console.log('servidor ouvindo'))