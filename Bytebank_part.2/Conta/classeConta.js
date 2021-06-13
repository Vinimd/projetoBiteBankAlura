//classe abstrata:essa classe nunca deve ser instanciada,ela deve ser somente herdada
import {
    dadosCliente
} from "./classeCliente.js"
export class conta {


    constructor(cliente, agencia, saldoInicial) {

        if (this.constructor == conta) {

            throw new console.error("Você não deveria instanciar um objeto da classe conta:Calsse abstrata");
        }
        this._cliente = cliente;
        this._agencia = agencia;
        this._saldo = saldoInicial;
    }

    set cliente(atribuirCliente) {
        if (atribuirCliente instanceof dadosCliente)
            this._cliente = atribuirCliente;
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }
    sacar(valor) {
        throw console.error("merodo abstrato:Taxa não especificada na classe filho");
    }
    _sacar(valor, taxa) {
        const valorSacado = taxa * valor
        if (valorSacado <= (this._saldo)) {

            this._saldo -= valorSacado;
            return valorSacado;
        }
        return 0;
    }
    depositar(valorDesposito) {
        if (valorDesposito <= 0) {
            return;
        }
        this._saldo += valorDesposito;
    }

    transferir(valorTransferencia, contaCorrente) {
        if (valorTransferencia > this._saldo) {
            return;
        }
        const transferir = this.sacar(valorTransferencia);
        contaCorrente.depositar(transferir);
    }
}