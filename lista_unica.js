const clientes = [{
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
    }],
    },
    {
    nome:"Karla Leite",
    cpf:"98765432110" ,
    dependentes:[{
        nome: 'Luna Leite', 
        parentesco: 'Filha', 
        dataNasc: '19/05/2020' }]    
}]


const listaDependentes = [...clientes[0].dependentes,...clientes[1].dependentes]

console.table(listaDependentes)