
class Cliente{
    constructor (nome,email,cpf,saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }
    
    depositar(valor){
        this.saldo += valor
    }
    exibirSaldo(){
        console.log(this.saldo)
    }
}

const lucas = new Cliente("Lucas","lukas_vit@hotmail.com","12345678910",100)

console.log(lucas)

lucas.exibirSaldo()

