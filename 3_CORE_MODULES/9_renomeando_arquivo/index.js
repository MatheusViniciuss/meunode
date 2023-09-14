const fs = require('fs')

const arqAntigo = "arquivo.txt"
const arqNovo = "novoarquivo.txt"

// const arqAntigo = "novoarquivo.txt"
// const arqNovo = "arquivo.txt"

fs.rename(arqAntigo, arqNovo, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log(`O Arquivo ${arqAntigo} foi renomeado para ${arqNovo} !`)
})
