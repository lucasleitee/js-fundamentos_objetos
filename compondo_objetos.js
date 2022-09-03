const cliente = {
    nome:"Lucas",
    idade:29,
    cpf:"12345678910",
    email:"lukas_vit@hotmail.com",
    fones:["55912345678","55998765432"]
}

cliente.dependentes = {
    nome:"Luna",
    parentesco:"filha",
    dataNasc:"19/05/2020"
}

// console.log(cliente)

cliente.dependentes.nome = "Luna Leite"

console.log(cliente)