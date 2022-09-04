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

  function oferercerSeguro(obj){
    const propsClientes = Object.keys(obj);
    if(propsClientes.includes("dependentes")){
        console.log(`Oferta de seguro de vida para ${obj.nome}`)
    } else {
        console.log(`Não oferecer seguro`)
    }
  }

  oferercerSeguro(clientes)