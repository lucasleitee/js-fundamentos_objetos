const clientes = {
    nome: 'Lucas',
    idade: 29,
    cpf: '12345678910',
    email: 'lukas_vit@hotmail.com',
    fones: [ '55912345678', '55998765432' ],
    dependentes: [
    {   
        nome: 'Luna Leite', 
        parentesco: 'Filha', 
        dataNasc: '19/05/2020' },
    {   
        nome: 'Karla Leite', 
        parentesco: 'Esposa', 
        dataNasc: '15/06/1993'
    }
    ],
    saldo:100,
    depositor:function(valor) {
        this.saldo += valor
    }
  }


console.log(clientes.saldo)
clientes.depositor(30)
console.log(clientes.saldo)