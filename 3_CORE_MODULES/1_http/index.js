const http = require('http')

const port = 3000
const name = "Matheus Vinicius"

const server = http.createServer((req, res) => {
  res.write(`Oi ${name} este servidor é HTTP`)
  res.end()
})

server.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`)
})
