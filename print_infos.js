
const cliente = {
    nome:"Lucas",
    idade:29,
    cpf:"12345678910",
    email:"lukas_vit@hotmail.com"
}

console.log(`Meu nome é ${cliente.nome}, tenho ${cliente.idade} anos e meu e-mail é ${cliente.email}`)
console.log(`Me confirma por gentileza ${cliente.nome}, os três primeiros dígitos do seu cpf começa com ${cliente.cpf.substring(0,3)}?`)
