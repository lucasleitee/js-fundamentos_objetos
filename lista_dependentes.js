
const clientes = {
    nome: 'Lucas',
    idade: 29,
    cpf: '12345678910',
    email: 'lukas_vit@hotmail.com',
    fones: [ '55912345678', '55998765432' ],
    dependentes: [{
      nome: 'Luna Leite',
      parentesco: 'Filha',
      dataNasc: '19/05/2020'
    }]
  }

clientes.dependentes.push({
    nome: "Karla Leite",
    parentesco: "Esposa",
    dataNasc: "15/06/1993"
})

console.log(clientes)

const dependentes_filho = clientes.dependentes.filter(dependente => dependente.parentesco === "Filha")

console.log(dependentes_filho[0].nome)