import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OperationsService {

  constructor() { }
  numberAndOperationButtons: {[key:string]:string} = {
    
    0: 'AC',
    1: '7',
    2: '3',
    3: '2',
    4: '1',
    5: '=',
    6: '0',
    7: '+',
    8: '-',
    10: '8',
    11: '9',
    12: '%',
    13: '4',
    14: '5',
    15: '6',
    16: '*',
    
  };
  resultOnScreen : boolean = false;
  numberScreen : string = '';
  changeScreen(position:number): string {
    if(this.resultOnScreen){
      if(this.numberScreen != '0'){
        this.numberScreen='';
      }
      if(this.numberScreen === ''){
        this.numberScreen='0';
      }
    }
    if(position===0){
      this.numberScreen = '0';
      return this.numberScreen;
      }
    if(position===5){
        this.resultOnScreen = true;
          if(this.numberScreen == 'undefined'){
            this.numberScreen='Syntax error'
            return this.numberScreen;
           }
           else {
            return this.numberScreen;
             
           }
        }
        else{
          this.resultOnScreen=false;
        }
    
    if(this.numberScreen.length<=6){
      
      if(this.numberScreen === '0'){
        this.numberScreen = this.numberAndOperationButtons[position]+'';
      }
      else {
        this.numberScreen += '' + this.numberAndOperationButtons[position];
      }
    }
    
    return this.numberScreen;
  }

  emptyScreen(): void {
    this.numberScreen = '0';
  }
  
  resolveOperation(expression : string): void{
    if(this.numberScreen != 'Syntax error'){
      this.numberScreen = eval(expression) +'';
      console.log(expression);
    }
    else {
      this.numberScreen = '0';
    }
  
    
    
  }
  
}
