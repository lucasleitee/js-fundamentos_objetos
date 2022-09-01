
const cliente = {
    nome:"Lucas",
    idade:29,
    cpf:"12345678910",
    email:"lukas_vit@hotmail.com"
}

const chaves = ["nome","idade","cpf","email"]

console.log(cliente[chaves[0]])

chaves.forEach(i =>console.log(cliente[i]))