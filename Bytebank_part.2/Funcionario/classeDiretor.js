import {
    funcionario
} from "./classeFuncionario.js";

export class diretor extends funcionario {
    constructor(nome, cpf, salario) {
        super(nome, cpf, salario)
        this._bonificacao = 2;
    }

}