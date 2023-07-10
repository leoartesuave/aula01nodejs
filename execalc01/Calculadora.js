export class Calculadora{
    /* op = 0; */

    constructor(num1, num2){

        this.num1 = num1;
        this.num2 = num2;
 
        
    }

    operacao(op){
        let res;
        if(op == "+"){
            try{
            res = parseFloat(this.num1 + this.num2);  
            }catch{console.log(e)}
        } else if(op == "-"){
            try{
            res = this.num1 - this.num2;  
            }catch{console.log(e)}
        }else if(op == "*"){
            try{
            res = this.num1 * this.num2;  
            }catch{console.log(e)}
        }else if(op == "/"){
            try{
            res = this.num1 / this.num2;  
            }catch{console.log(e)}
        }else{
          let  msg = "Operador desconhecido";
            return msg;
        }
        
        return res;
    }
}