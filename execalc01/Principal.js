import { Salario } from "./salario.js";
import { Calculadora } from "./Calculadora.js";

const calc = new Calculadora(2, 8);

console.log(calc.operacao("+"));

const salario = new Salario();
salario.salario = 1000;
salario.novoSalario(600);
