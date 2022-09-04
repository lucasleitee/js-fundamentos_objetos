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

  let relatorio = "";

  for (let info in clientes){
    if(typeof clientes[info] === "object" || typeof clientes[info] === "function"){
        continue
    } else {
    relatorio += ` ${info}:${clientes[info]}\n`
    }
  }

  console.log(relatorio)