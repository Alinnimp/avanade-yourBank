export class Cliente {
    nome: String;
    senha: String;
    cpf: Number;
    agencia: Number;
    conta: Number;
    saldo: Number;
    transferencia: [{
        agencia: Number,
        conta: Number,
        valor: Number,
        data: Date,
        tipo: Boolean
    }]
}