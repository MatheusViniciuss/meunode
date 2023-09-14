//const Chalk = require("chalk");
//import Chalk from "chalk";

import chalk from "chalk";

const nota = 5

//  if (nota >= 7) {
//   console.log(chalk.green.bold("Parabéns, você passou!"));
// } else {
//    console.log(chalk.bgRed.black("Você foi reprovado!"));
//  }

 nota >= 6 ? console.log(chalk.green.bold("Parabéns, você passou!")) : console.log(chalk.bgRed.black("Você foi reprovado!"));