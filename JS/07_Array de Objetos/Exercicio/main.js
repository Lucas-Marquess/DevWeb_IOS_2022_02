const alunos = [
    {
        Nome: "Lucas",
        Nota: [9, 6, 8, 7],
        Endereço: {
            Rua: 'Rua Macuxis',
            Numero: 483,
            Cidade: 'São Paulo',
            Estado: 'SP',
        },
        Série: "3° do Ensino Médio",
        Sala: "10",
    },
    {
        Nome: "Vitor",
        Nota: [5, 7, 6, 8],
        Endereço: {
            Rua: 'Arroio do tigre',
            Numero: 294,
            Cidade: 'São Paulo',
            Estado: 'SP',
        },
        Série: "3° do Ensino Médio",
        Sala: "10",

    },
    {
        Nome: "Ana",
        Nota: [10, 7, 9, 6],
        Endereço: {
            Rua: 'Avenida Imirim',
            Numero: 1000,
            Cidade: 'São Paulo',
            Estado: 'SP',
        },
        Série: "3° do Ensino Médio",
        Sala: "10",

    },
];
console.log(alunos);
console.log(alunos[1].texto);
console.log(alunos[2].Nome, alunos[2].Nota, alunos[2].Endereço);