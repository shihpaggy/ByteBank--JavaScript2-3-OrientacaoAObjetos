/* Ser autenticavel significa ter o metodo "autenticar"*/
/*Duck typing*/


export class SistemaAutenticacao{
    static login(autenticavel,senha){
        if(SistemaAutenticacao.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha);
       }else{
           return false;
       }
    }

    static ehAutenticavel(autenticavel){
        return "autenticar" in autenticavel && 
        autenticavel.autenticar instanceof Function;
    }
}