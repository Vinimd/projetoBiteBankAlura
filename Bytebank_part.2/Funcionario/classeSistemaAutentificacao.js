export class sistemaAutentificacao {
    static login(autenticavel, senha) {
        if (sistemaAutentificacao.ehAutenticavel(autenticavel)) {
            return autenticavel.autenticar(senha);
        }
        return false;
    }
    static ehAutenticavel(autenticavel) {
        return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function;
    }
}