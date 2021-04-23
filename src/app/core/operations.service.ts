import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OperationsService {

  constructor() { }
  numberAndOperationButtons: {[key:number]:number} = {
    0: 7,
    1: 8,
    2: 9,
    3: 4,
    4: 5,
    5: 6,
    6: 1,
    7: 2,
    8: 3,
    9: 0
  };
  numberScreen : string = '';
  changeScreen(position:number): string {
    if(this.numberScreen.length<=6){
      if(this.numberScreen === '0'){
        this.numberScreen = this.numberButtons[position]+'';
      }
      else {
        this.numberScreen += '' + this.numberButtons[position];
      }
    }
    
    return this.numberScreen;
  }
}
