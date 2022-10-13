// Exercicio 1 

var num1 = 'R$10';
var num2 = 'R$30';
var num3 = 'R$5';

if(num1>num2){
if(num1>num3){
console.log("R$10 é o menor!");
}else
console.log("R$3 é o menor!");
}else if(num2>num1){
if(num1>num3){
console.log("R$50 é o menor!");
}else
console.log("R$3 é o menor!");
}

// Exercicio 2

var a = 2;
var b = 1;
var c = 3;
if (b < a < c) console.log('1,2,3');

// Exercicio 3

let ano = 2020
if (ano % 100 == 0) {
    console.log(ano + ' Não é um ano bissexto');
} else if (ano % 400 == 0 || ano % 4 ==0) {
    console.log(ano + ' É um ano bissexto');
}