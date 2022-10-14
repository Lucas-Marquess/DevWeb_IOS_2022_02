// while-Exercicio 1
let contador = 1;
while (contador <= 50) {
    console.log(`Valor = ${contador}`);
    contador++;
}


// do-while-Exercicio 2
let i = 10,
    text = '';
do {
    text += `O número é ${i}\n`;
    i++;
} while (i < 0);
console.log(text);


// for-Exercicio 3
for (let i = 0; i < 10; i++) console.log(`Laço For número: ${i}`);