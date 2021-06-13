import {
    conta
} from "./classeConta.js";

export class contaSalario extends conta {
    constructor(cliente, agencia) {
        super(cliente, agencia, 0)
    }
    sacar(valor) {
        const taxaSacarContaSalario = 1.01;
        return super._sacar(valor, taxaSacarContaSalario);
    }
}