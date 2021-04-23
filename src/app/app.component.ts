import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calculator';
  screenValue : number = 0;
  getPosition(value : number){
    this.screenValue=value;
  }
}
