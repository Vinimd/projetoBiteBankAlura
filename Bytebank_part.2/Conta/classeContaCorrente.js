import {
    conta
} from "./classeConta.js";

export class dadosContaCorrente extends conta {
    static numeroDeContasCorrentes = 0;
    constructor(cliente, agencia) {
        super(cliente, agencia, 0)
        dadosContaCorrente.numeroDeContasCorrentes++;
    }
    static numeroDeContasCorrentes = 0

    sacar(valor) {
        const taxaSacarContaCorretnte = 1.1;
        return super._sacar(valor, taxaSacarContaCorretnte)

    }
}