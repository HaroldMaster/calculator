import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MediumButtonComponent } from './medium-button/medium-button.component';
import { NumberBoxComponent } from './number-box/number-box.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MediumButtonComponent,
        NumberBoxComponent

      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });


});
