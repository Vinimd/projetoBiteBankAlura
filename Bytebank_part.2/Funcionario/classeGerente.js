import {
    funcionario
} from "./classeFuncionario.js";

export class gerente extends funcionario {
    constructor(nome, cpf, salario) {
        super(nome, cpf, salario)
        this._bonificacao = 1.1;
    }

}