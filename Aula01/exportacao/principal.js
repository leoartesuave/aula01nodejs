   import { Pessoa2 } from "./pessoa2.js";
   
   
   //instaciar uma classe para usar o molde
   const prof = new Pessoa2("João", 25);
   prof.falar(); // Saída: Olá, meu nome é João e tenho 25 anos.
   
  const prof2 = new Pessoa2("Maria", 30);
   prof2.falar(); // Saída: Olá, meu nome é Maria e tenho 30 anos.
   
   console.log(prof.falar());
   console.log(prof2.falar());