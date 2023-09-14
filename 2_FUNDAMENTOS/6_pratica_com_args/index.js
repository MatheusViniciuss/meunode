// 2_FUNDAMENTOS\6_pratica_com_args> node .\index.js --a=5 --b=10

// externo
const minimist = require('minimist')

// interno
const soma = require('./soma').soma;

//soma(2, 2);

const args = minimist(process.argv.slice(2));

const a = parseInt(args["a"])
const b = parseInt(args["b"])
 
soma(a, b)