const numerosPares = [2,4,6]
const numerosImpares = [1,3,5]

const numeros = [...numerosPares,...numerosImpares]

const [num1, num2, ...outrosNum] = [1,2,3,4,5,6,7,8,9]

const [nome1 = 'Lucas'] = [1]

const pessoa = {
    nome:"Lucas",
    idade:29
}

const pessoaCTelefone = {...pessoa,telefone:75991919292}

const {nome} = pessoa

// function imprimeDados(dados){
//     const {nome, idade} = dados
//     console.log(nome, idade)
// }

function imprimeDados({nome,idade}){
    console.log(nome, idade)
}

imprimeDados(pessoa)


// console.log(pessoa)
// console.log(pessoaCTelefone)
