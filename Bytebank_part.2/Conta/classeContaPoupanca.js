import {
    conta
} from "./classeConta.js";

export class contaPoupanca extends conta {
    constructor(cliente, agencia, saldoInicial) {
        super(cliente, agencia, saldoInicial)
    }
    sacar(valor) {
        const taxaSacarContaPoupanca = 1.02;
        return super._sacar(valor, taxaSacarContaPoupanca);
    }
}