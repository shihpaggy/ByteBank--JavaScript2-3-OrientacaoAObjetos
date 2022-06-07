import {Conta} from './Conta.js'

export class ContaPoupanca extends Conta{
   constructor(cliente,agencia){
       super(cliente,agencia);
       ContaPoupanca.numeroDeContas++;
   }

   sacar(valor){
    let taxa = 1.02;
    return this._sacar(valor,taxa);
}

}