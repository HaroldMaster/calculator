import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calculator';
  screenValue : number = 0;
  numberBox(value : number){
    //console.log('get pos', value);
    this.screenValue=value;
  }
}
