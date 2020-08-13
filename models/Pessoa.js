//define teachers table (Aqui definiremos nossa tabela de professores)

const Sequelize = require('sequelize')
const connection = require('./database')
const { STRING } = require('sequelize')

const Pessoa = connection.define('pessoas', {
    nomeAluno:{
        type: STRING,
    },

    documentoAluno:{
        type:STRING,
    },

   serieAluno:{
        type: STRING,
    },

    nomeProfessor:{
        type: STRING,
    },

    documentoProfessor:{
        type:STRING,
    },

   materiaProfessor:{
        type: STRING,
    },


    
})

Pessoa.sync({force: false})
module.exports = Pessoa