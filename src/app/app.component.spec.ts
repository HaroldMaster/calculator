import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { LargeButtonComponent } from './large-button/large-button.component';
import { MediumButtonComponent } from './medium-button/medium-button.component';
import { NumberBoxComponent } from './number-box/number-box.component';
import { SmallButtonComponent } from './small-button/small-button.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SmallButtonComponent,
        MediumButtonComponent,
        LargeButtonComponent,
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
