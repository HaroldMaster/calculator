import { Injectable } from '@angular/core';
import { ButtonType } from '../medium-button/medium-button.model';
import { ScreenValue } from '../number-box/number-box-model';
import { KeyPosition } from '../core/operation.model';
@Injectable({
  providedIn: 'root'
})
export class OperationsService {

  private SCREEN_MAX_LENGTH: number = 6;
  constructor() { }
  numberAndOperationButtons: {[key:number]:string} = {
    
    [KeyPosition.AC] :      'AC',
    [KeyPosition.seven]:    '7',
    [KeyPosition.three]:    '3',
    [KeyPosition.two]:      '2',
    [KeyPosition.one]:      '1',
    [KeyPosition.equal]:    '=',
    [KeyPosition.zero]:     '0',
    [KeyPosition.plus]:     '+',
    [KeyPosition.less]:     '-',
    [KeyPosition.eight]:    '8',
    [KeyPosition.nine]:     '9',
    [KeyPosition.percent]:  '%',
    [KeyPosition.four]:     '4',
    [KeyPosition.five]:     '5',
    [KeyPosition.six]:      '6',
    [KeyPosition.asterisk]: '*',
    
  };
  resultOnScreen : boolean = false;
  numberScreen : string = '';
  changeScreen(position:number): string {

    console.log(position) //?
    console.log(this.resultOnScreen) 
    if(position==5 && this.resultOnScreen ==true){
      position = ButtonType.AC;
    }
    if (this.resultOnScreen) {
      console.log('aqui')
      if(/\+|\-|\*|\%/.test(this.numberAndOperationButtons[position])) {
        console.log(this.resultOnScreen) 
          this.numberScreen += this.numberAndOperationButtons[position];
          this.resultOnScreen=false;
          return this.numberScreen;
        }
      
      if (position === ButtonType.AC) {
        this.numberScreen = ScreenValue.initialValue;
        return this.numberScreen;
      } 


      this.numberScreen = this.numberAndOperationButtons[position];
      this.resultOnScreen = false;
        console.log(this.numberScreen);

      
      return this.numberScreen;
    }

    if(position === ButtonType.AC){
      this.numberScreen = ScreenValue.initialValue;
      return this.numberScreen;
    }

    if(position === ButtonType.Equal){
        /*if(/^\d+$/.test(this.numberScreen)) {
           return this.numberScreen; 
        }*/

        this.resultOnScreen = true;
          if(this.numberScreen == ScreenValue.wrongOperation){
            this.numberScreen=ScreenValue.error;
            return this.numberScreen;
           }
           else {
            try {
              this.resolveOperation(this.numberScreen);
            } catch (error) {
              this.numberScreen = ScreenValue.error;
              this.resultOnScreen = false;
              return this.numberScreen
            }
            return this.numberScreen;
             
           }
        }
        else{
          this.resultOnScreen=false;
        }
    
    console.log(this.numberScreen)
        
    if(this.numberScreen === ScreenValue.error && position !== ButtonType.Equal) {
      this.numberScreen = this.numberAndOperationButtons[position]+'';
      return this.numberScreen;
    }


    if(this.numberScreen.length<=this.SCREEN_MAX_LENGTH){
      if(this.numberScreen ===ScreenValue.initialValue){
        this.numberScreen = this.numberAndOperationButtons[position]+'';
      }
      else {
        this.numberScreen += '' + this.numberAndOperationButtons[position];
      }
    }
    
    return this.numberScreen;
  }

  resolveOperation(expression : string): void{
    if(this.numberScreen != ScreenValue.error){
      this.numberScreen = eval(expression) +'';
      console.log(expression);
    }
    else {
      this.numberScreen = ScreenValue.initialValue;
      this.resultOnScreen = false;
    }
  }
}
