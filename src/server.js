// importar depencia, biblioteca etc
const express = require('express'); /* express é uma variavel que recebe uma função e vira uma função */

// pra evitar erros com / pelo diretorio do windows que usa \
const path = require('path');

const pages = require('./pages.js')

// iniciando a biblioteca express
const server = express()            /* executa a função para o servidor */
server
// utilizar body do require
.use(express.urlencoded({ extended: true }))


// utilizando os arquivos estáticos
.use(express.static('public'))

// configurar template engine
.set('views', path.join(__dirname, "views")) /*o path join é uma configuração que aplica diretorio correto */
.set('view engine', 'hbs')


 //criar rotas da aplicação
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)
.post('/save-orphanage', pages.saveOrphanage)

 // ligar o servidor 
server.listen(5500)