const express = require('express');
const app = express()
const port = 5000 // variavel ambiente
const path = require('path');


//arquivos padrão css, img, js
app.use(express.static('public'))

const basePath = path.join(__dirname, 'templates')

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.use(function(req, res, next) {
    res.status(404).sendFile(`${basePath}/404.html`)
})

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
})
