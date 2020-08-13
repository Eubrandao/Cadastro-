
// Initializing database connection (Nesse model inicializaremos a conexão com o nosso banco de dados)

const sequelize = require('sequelize')

const connection = new sequelize('colegio', 'root', 'password',{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection