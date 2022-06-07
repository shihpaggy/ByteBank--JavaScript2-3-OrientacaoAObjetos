/* a classe Cliente é o molde, cliente1 e cliente2 são as instancias da classe 
Cliente e nome, cpf etc são os objetos*/

export class Cliente{
    constructor(nome,cpf,senha){
        this.nome = nome;
        this._cpf = cpf;
        this._senha = senha;
    }

    get cpf(){
        return this._cpf;
    }
    
    cadastrarSenha(senha){
        this._senha = senha;
    }

    autenticar(senha){
        return senha == this._senha;
    }
}
