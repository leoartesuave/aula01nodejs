export class Salario{
   

        meta;
        venda;
        salario;
        res;
     
     novoSalario(venda){
         if(venda >= 500){
        this.res = (this.salario * 0.1); 
     }else{
         msg = "você não conseguiu bater a meta!!"
         return msg;
     
     }
     return res;
     }
     get valorSalario(){
     
         return this._res;
     }
     }
