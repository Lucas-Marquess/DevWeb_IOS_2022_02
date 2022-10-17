// while-Exercicio 1
let contador = 1;
while (contador <= 50) {
    console.log(`Valor = ${contador}`);
    contador++;
}


// do-while-Exercicio 2
let contagem = 10,
    regressiva = '';

do {
    regressiva += ` contagem ${contagem}\n`;
    contagem--;
} while (contagem >= 0);
console.log(regressiva);

// pares-Exercicio 3

for (let i = 1; i < 100; i++) {
    if ( i % 2 == 1) {
        i = i + 1;
    }
    console.log(` Números pares ${i}`);
}