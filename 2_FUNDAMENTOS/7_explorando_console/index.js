// mais de uma valor
const x = 10;
const y = "Matheus Vinicius";
const z = [1,2]

console.log(x, y, z);

// contagem de impressões
console.count(`O valor de x é: ${x}, contagem`);
console.count(`O valor de x é: ${x}, contagem`);
console.count(`O valor de x é: ${x}, contagem`);
console.count(`O valor de x é: ${x}, contagem`);
console.count(`O valor de y é: ${y}, contagem`);

// variável entre string
console.log("O nome dele é %s, ele é programador", y);

// limpando console
setTimeout(() => {
  console.clear();
}, 5000);
