import { Component } from '@angular/core';
import { OperationsService } from './core/operations.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calculator';
  screenValue : string = '0';
  numberAndOperationButtons: {[key:number]:string}; 

  constructor(private operationsService: OperationsService) {
    this.numberAndOperationButtons = this.operationsService.numberAndOperationButtons;
  }

  numberBox(value : number){
    console.log({value});
    this.screenValue = this.operationsService.changeScreen(value);
  }
}
