import { inject } from '@angular/core';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { OperationsService } from '../core/operations.service';
import { NumberBoxComponent } from '../number-box/number-box.component';

@Component({
  selector: 'app-medium-button',
  templateUrl: './medium-button.component.html',
  styleUrls: ['./medium-button.component.scss']
})
export class MediumButtonComponent implements OnInit {
  numberButtons : {[key:number]:number} = {}
  constructor( private operationsService: OperationsService) {
      this.numberButtons = operationsService.numberButtons;
   }
  @Input() numberKeyboard: number = 0;
  @Output() buttonClick: EventEmitter<any> = new EventEmitter();
   position : number = 0;
  ngOnInit(): void {
  }
  emitBoxClick(position:number): void {
  
    this.buttonClick.emit(this.operationsService.changeScreen(position));
  }
}
