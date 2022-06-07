import {Cliente} from '../Clientes.js'

//Classe abstrata
export class Conta{
    static numeroDeContas = 0;
    _cliente;
    _agencia;
    _saldo = 0;
    
    constructor(cliente,agencia){

        if(this.constructor == Conta){
            throw new Error (`Você não deveria instanciar um objeto do tipo Conta diretamente, pois ela é uma classe abstrata`);
        }

        this._cliente = cliente;
        this._agencia = agencia;
    }

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }    
    }    
    
    get cliente(){
        return this._cliente;
    }    
    
    get agencia(){
        return this._agencia;
    }    
    
    get saldo(){
        return this._saldo;
    }    

    sacar(valor){
        throw new Error(`O método Sacar da conta é abstrato`);
    }

    _sacar(valor, taxa){
        const valorSacado = valor * taxa;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }else{
            return 0;
        }
    }

    depositar(valor){
        if(valor>0){
            this._saldo += valor;
            return valor;
        }
    }

    transferir(valor,conta){
        const valorTransferido = this.sacar(valor);
        conta.depositar(valorTransferido);
    }
}