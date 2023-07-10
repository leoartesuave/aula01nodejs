export class Aluno{

    //Atributo Privado
    //Para inserir ou consultar um atributo privado é necessario encapsular
    _cpf;
    constructor(nom, sobreNom){
        this.nom = nom;
        this.sobreNom = sobreNom;
    }

    //Para atribuir um valor a um atributo privado utilizamos o método set
    set inserirCpf(cpf){
            this._cpf = cpf;
    }

    //Para visualizar um atr privado, usa o get;
    get inserirCpf(){
      try{
        return this._cpf
      }catch(e){
        console.log(e);
      }
    }


    //nossos métodos (Comum);
    falarNome(){
        return this.nom;
    }

    falarSobreNome(){
        return this.sobreNom;
    }
}