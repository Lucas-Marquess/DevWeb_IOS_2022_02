// Método ForEach()
var frutas = ["Banana", "Maça", "Kiwi", "Melancia"]

// Metódo ForEach() é utilizado para percorrer um array e aplicar alguma mudança ou configuração
frutas.forEach(minhaFuncao)

function minhaFuncao(valor, indice){
    console.log(`O valor é ${valor}`)
    console.log(`O indice é ${indice}`)   
}

// Método ForEach() com array de objetos utilizando Arrow function
const alunos = [
    {
        id: 1,
        nome:"Marcelo",
        passou: true,
    },
    {
        id: 2,
        nome:"Agatha",
        passou: false,
    },
    {
        id: 3,
        nome:"Vitor",
        passou: false,
    }
]

alunos.forEach((aprovados) => console.log(aprovados.passou));

// Método map()
const numeros = [2, 7, 8, 50, 34]
const novosNumeros = numeros.map(Math.sqrt);
console.log(novosNumeros)

console.clear();

const cachorro = [
    {
        id: 1,
        nome:"Boloninho",
        idade: 2,
    },
    {
        id: 2,
        nome:"Tobby",
        idade: 7,
    },
    {
        id: 3,
        nome:"Pingo",
        idade: 6,
    }
]

const mapCachorro = cachorro.map((nomeDog) => {
    return nomeDog.nome;
})

console.log(cachorro)
console.log(mapCachorro)

console.clear()

// Método Filter() percorre o array e retorna as informações que passam no filtro
const idade = [5, 9, 10, 15, 25, 35, 45, 89]
// Percorrer o array e retornar apenas as idades abaixo de 30
let filtraIdade = idade.filter((idade) => {
    return idade < 30
})
console.log(filtraIdade);

 console.clear()

// Método find()
console.log(
    cachorro.find((procuraNome) => {
        return procuraNome.nome === 'Tobby';
    })
)