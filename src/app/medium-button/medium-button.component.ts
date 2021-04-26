import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { ButtonType } from './medium-button.model';

@Component({
  selector: 'app-medium-button',
  templateUrl: './medium-button.component.html',
  styleUrls: ['./medium-button.component.scss']
})
export class MediumButtonComponent implements OnInit {
  @Input()
  numberAndOperationButtons: {[key:number]:string} = {}
  @Output() buttonClick: EventEmitter<any> = new EventEmitter();
  constructor() {
   }
 // @Input() numberKeyboard: number = 0;
  
   //position : number = 0;

  buttonType = ButtonType;

  ngOnInit(): void {
  }
  emitBoxClick(position:number): void {
    this.buttonClick.emit(position);
  }
}
