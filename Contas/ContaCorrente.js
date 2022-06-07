import {Conta} from './Conta.js'

export class ContaCorrente extends Conta{
    constructor(cliente,agencia){
        super(cliente,agencia);
        ContaCorrente.numeroDeContas++;
    }

    sacar(valor){
        let taxa = 1.1;
        return this._sacar(valor,taxa);
    }
}
