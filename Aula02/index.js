import { Aluno } from "./Aluno.js";

const aluno = new Aluno("Leo", "Teixeira");

aluno.nom = "Spider";
aluno.sobreNom = "Man";

//Forma errada de acessa um atributo privado
//aluno.inserirCpf = 12385214658;
console.log("");
console.log(aluno.falarNome());
console.log("");
//forma correta de acessar um atr privado
aluno.inserirCpf = "123852146-58";
console.log(aluno.inserirCpf);
console.log("");