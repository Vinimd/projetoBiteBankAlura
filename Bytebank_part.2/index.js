import {
    dadosCliente
} from "./Conta/classeCliente.js";
//  import {dadosContaCorrente} from "./conta/classeContaCorrente.js"
//  import {contaPoupanca} from "./conta/classeContaPoupanca.js"
//  import {contaSalario} from "./Conta/ClasseContaSalario.js"
import {
    gerente
} from "./Funcionario/classeGerente.js"
import {
    diretor
} from "./Funcionario/classeDiretor.js"
import {
    sistemaAutentificacao
} from "./Funcionario/classeSistemaAutentificacao.js"


const cliente1 = new dadosCliente("Ricardo", "111.222.333-44", "123"); 
// const contaCorrenteCliente1 = new dadosContaCorrente(cliente1,1001,0);


// const cliente2 = new dadosCliente("Alice","555.666.777-88");
// const contaCorrenteCliente2 = new dadosContaCorrente(cliente2,1001,0);
// contaCorrenteCliente2.depositar(100);


// const cliente3 = new dadosCliente("Vinicius","987.654.321-12");
// const contaCorrenteCliente3 = new dadosContaCorrente(cliente3,1001,0);
// contaCorrenteCliente3.depositar(500);
// contaCorrenteCliente3.transferir(300,contaCorrenteCliente1);
// const contaPoupancaCliente3 = new contaPoupanca(cliente3,1001,100);
// const contaSalarioCliente3 = new contaSalario(cliente1,1001);
// contaSalarioCliente3.depositar(1200);
// contaSalarioCliente3.sacar(200);


// console.log(contaCorrenteCliente1);
// console.log(contaCorrenteCliente2);
// console.log(contaCorrenteCliente3);
// console.log(contaPoupancaCliente3);
// console.log(contaSalarioCliente3);


const diretor1 = new diretor("Guilherme", "123.456.789.0", 10000);
diretor1.cadastrarsenha("123456");
const gerente1 = new gerente("Marcio", "123.789.456-1", 50000);
gerente1.cadastrarsenha("1234")
const estaLogado = sistemaAutentificacao.login(diretor1, "123456");
const estaLogadoGerente1 = sistemaAutentificacao.login(gerente1, "1234");
const estaLogadoCliente1 = sistemaAutentificacao.login(cliente1, "123");
console.log(cliente1);
console.log(estaLogado, estaLogadoGerente1, estaLogadoCliente1);