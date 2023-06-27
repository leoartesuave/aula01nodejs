//Criar uma Classe pessoa.
    //A pessoa deverá falar seu nome e sua idade
  export class Pessoa2{
    
        //Método construtor - Método padrão de toda a classe
        constructor(nome, idade) {
          //atributos  
          this.nome = nome;
            this.idade = idade;
          }
    
          // método - realizar uma ação
        falar() {
    
            //para retornar uma resposta da ação
            return("Olá, meu nome é " + this.nome +  " e tenho " + this.idade  + " anos.");
          }
    
     }
    
  