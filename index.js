//initializing the variables(Aqui inicializaremos as variáveis para começarmos o app)

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const connection = require('./models/database')
const Pessoa = require('./models/Pessoa')

//initializing the server(Inicializaremos o servidor aqui)

app.listen(3000, ()=>{
    console.log('Server is on port 3000')
})

//testing database connection(Iremos testar nossa conexão com o banco de dados)

connection
.authenticate()
.then(()=>{
    console.log('Conexão Ok!')
}).catch(()=>{
    console.log('Ops, a conexão falhou!')
})


//public directory and view engine(Aqui setaremos nossa view engine e nosso diretório público padrão de arquivos)

app.use(express.static('public'))
app.set('view engine', 'ejs')

/*bodyParser--->send information form html for backend(o bodyParser será responsável por enviar as informações
do formulário html para o nosso backend */
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

//Insert and select (Aqui faremos o insert e o select respectivamente dos alunos e professores)

app.post('/cadastrarPessoa', (req, res)=>{
    var nomeAluno = req.body.nomeAluno
    var documentoAluno = req.body.documentoAluno
    var serieAluno = req.body.serieAluno
    var nomeProfessor = req.body.nomeProfessor
    var documentoProfessor = req.body.documentoProfessor
    var materiaProfessor = req.body.materiaProfessor

    Pessoa.create({
        nomeAluno : nomeAluno,
        documentoAluno : documentoAluno,
        serieAluno : serieAluno,
        nomeProfessor : nomeProfessor,
        documentoProfessor: documentoProfessor,
        materiaProfessor : materiaProfessor
    })

    res.redirect('/')
})
app.get('/', (req, res)=>{
    Pessoa.findAll({raw:true}).then(pessoas=>{

        res.render('home',{
pessoas:pessoas
        })
        
    })
    
})

//routes(rotas de acesso)


app.get('/alunoCadastro', (req,res)=>{
    res.render('alunoCadastro')
})


app.get('/professorCadastro', (req,res)=>{
    res.render('professorCadastro')

    
})