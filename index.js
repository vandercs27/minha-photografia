const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = process.env.port || 3000
const mysql = require('mysql2')
const path = require('path')
const multer = require('multer')
const session = require( 'express-session')
const fs = require('fs');
const uploadDir = path.join(__dirname, 'upload');

if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

// configuracao do multer para armazenar arquivo em memoria
const storage = multer.diskStorage({
    destination: (req, res, callback) => {
        callback(null, path.resolve("upload"))
    },
  
})
const upload = multer({
    storage:storage
})



// Template engine
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

// Middleware para processar dados do formulário
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))




app.get('/galeria', (req, res) => {
    
    res.render('galeria')
})

app.get('/retrato', (req, res) => {
    res.render('retrato')
})
app.get('/animais', (req, res) => {
    res.render('animais')
})
app.get('/gestantes', (req, res) => {
    res.render('gestantes')
})
app.get('/eventos', (req, res) => {
    res.render('eventos')
})
app.get('/bouduir', (req, res) => {
    res.render('bouduir')
})
app.get('/paisagem', (req, res) => {
    res.render('paisagem')
})
app.get('/conceitual', (req, res) => {
    res.render('conceitual')
})


app.get('/sobre', (req, res) => {
    res.render('sobre')

})



// rota para usuario
app.get('/', (req,res)=>{
    res.render('home')
})



// Rota para exibir a página inicial após login ou cadastro
app.get('/home', (req, res) => {
    res.render('home')
})

app.listen(port, () => {
    console.log(`O servidor está rodando na porta ${port}`)
})
