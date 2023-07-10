//Criar uma Classe pessoa.
    //A pessoa deverá falar seu nome e sua idade
 class Pessoa{
    
    constructor(nome, idade) {
      //atributos  
      this.nome = nome;
        this.idade = idade;
      }

      // método - realizar uma ação
    falar(nome, idade) {

        //para retornar uma resposta da ação
        return("Olá, meu nome é " + this.nome +  " e tenho " + this.idade  + " anos.");
      }

 }

 //instaciar uma classe para usar o molde
var pessoa1 = new Pessoa("João", 25);
pessoa1.falar(); // Saída: Olá, meu nome é João e tenho 25 anos.

var pessoa2 = new Pessoa("Maria", 30);
pessoa2.falar(); // Saída: Olá, meu nome é Maria e tenho 30 anos.

console.log(pessoa1.falar());
console.log(pessoa2.falar());