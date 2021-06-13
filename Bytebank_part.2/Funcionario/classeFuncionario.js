export class funcionario {
    constructor(nome, cpf, salario) {
        this._nome = nome;
        this._cpf = cpf;
        this.salario = salario;
        this.bonificacao = 1;
        this._senha;
    }
    autenticar(senha){
        return senha == this._senha;
    }

    cadastrarsenha(senha){
        this._senha = senha;
    }
}