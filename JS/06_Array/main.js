// Criando Array unidemensional
var array1 = ["Marcelo", 15, "Colin", 47, true]
console.log(array1);
console.log(array1[2]);
console.clear()
array1[3] = 80
console.log(array1)

// Array Bidemensional
var array2 = [
    ["pipoca", 10, false],
    ["String", 20, true],
    ["Margarina", 12, false],
]
console.log(array2);
console.log(array2[2][0]);
console.clear()
array2[1][0] = "Salsicha"
console.log(array2)


console.clear()
// Array de Objeto Carro
var carro = ["Uno", 1998, "0Km", false, 2]
var x = carro.toString();
console.log(typeof x)
console.log(typeof carro)
console.log(carro)
console.log(x)

console.clear()
var y = carro.join(" ? ")
console.log(carro)
console.log(x)
console.log(y)

// Tamanho de Array
console.log(carro.length)
console.clear()

// Remover e inserir elementos
// pop
// var t = carro.pop()
// console.log(carro)
// console.log(t)

// Método push - Insere uma informação no final do array
console.clear()
var u = carro.push('Lego');
console.log(carro)
console.log(u)

// Método Shift - Remove o elemento no inicio do array
console.clear()
var p = carro.shift();
console.log(carro)
console.log(p)

// Método Unshift - Adiciona a informação no inicio do array
console.clear()
var w = carro.unshift("console.log")
console.log(carro)
console.log(w)

// Comando Delete - Apagar um elemento do Array em uma posição pré selcionada
delete carro[1]
console.log(carro)