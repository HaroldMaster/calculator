import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { MediumButtonComponent } from '../medium-button/medium-button.component';
import mediumButtonStories from '../medium-button/medium-button.stories';

@Component({
  selector: 'app-number-box',
  templateUrl: './number-box.component.html',
  styleUrls: ['./number-box.component.scss']
})
export class NumberBoxComponent implements OnInit {
  @Input() screenNumber: string = '';

  constructor() {

   }
   
  ngOnInit(): void {
  }

  

}
