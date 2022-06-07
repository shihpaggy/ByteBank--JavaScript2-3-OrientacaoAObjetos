import {Conta} from './Conta.js'

export class ContaPoupanca extends Conta{
   constructor(cliente){
       super(cliente,agencia);
       ContaSalario.numeroDeContas++;
   }

   sacar(valor){
        let taxa = 1.01;
        return this._sacar(valor,taxa);
    }

}