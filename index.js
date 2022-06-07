/*__________________________ Curso de Orientação a Objetos _____________________*/

import {Cliente} from './Clientes.js'
import {ContaCorrente} from './Contas/ContaCorrente.js'
import {ContaPoupanca} from './Contas/ContaPoupanca.js'
//import {ContaSalario} from './Contas/ContaSalario.js'

/* aqui, colocamos a classe em um arquivo separado e importamos ele. Mas antes,
deve tratar o arquivo presente como um modulo. Para isso, deve abrir o ter-
minal e dar o comando 'npm init' criando um jason.*/

const cliente1 = new Cliente("Shih",'02302189620',13579);
const cliente2 = new Cliente("Lucas",'12345678900',24680);

const conta1 = new ContaCorrente(1001,cliente1);
const conta2 = new ContaCorrente(1001,cliente2);

const poupanca1 = new ContaPoupanca(1001,cliente1);
const poupanca2 = new ContaPoupanca(1001,cliente2);

conta2.depositar(200);

conta2.sacar(100);

/*___________________________________________________________________________*/

import {Diretor} from "./Funcionarios/Diretor.js"
import {Gerente} from "./Funcionarios/Gerente.js"
import {SistemaAutenticacao} from "./SistemaAutenticacao.js"

const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha(123456);
const gerente = new Gerente("Ricardo", 8000, 12345678911);
gerente.cadastrarSenha("000000");

const diretorEstarLogado = SistemaAutenticacao.login(diretor,"123456");
const gerenteEstarLogado = SistemaAutenticacao.login(gerente,"123456");
const cliente1EstarLogado = SistemaAutenticacao.login(cliente1,13579);

console.log(diretorEstarLogado,gerenteEstarLogado,cliente1EstarLogado);