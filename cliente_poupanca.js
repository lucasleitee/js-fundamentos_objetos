function Cliente(nome,cpf,email, saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo= saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}

function ClientePoupanca(nome,cpf,email,saldo,saldoPoup)
{
    Cliente.call(this,nome,cpf,email,saldo)
    this.saldoPoup = saldoPoup 
}

const Lucas = new ClientePoupanca("Lucas","12345678910","lukas_vit@hotmail.com",100,200)

console.log(Lucas)

ClientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor
}

Lucas.depositarPoup(30)

console.log(Lucas.saldoPoup)
