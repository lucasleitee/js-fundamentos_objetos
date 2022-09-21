function Cliente(nome,cpf,email, saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo= saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}

const Lucas = new Cliente("Lucas","12345678910","lukas_vit@hotmail.com",100)

console.log(Lucas)