import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { OperationsService } from '../core/operations.service';
import { NumberBoxComponent } from '../number-box/number-box.component';
import { MediumButtonComponent } from './medium-button.component';

describe('MediumButtonComponent', () => {
  let component: MediumButtonComponent;
  let fixture: ComponentFixture<MediumButtonComponent>;
  let componentNumberBox: NumberBoxComponent;
  let fixtureNumberBox: ComponentFixture<NumberBoxComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediumButtonComponent],
      providers: [OperationsService]
     // providers: [{provide: OperationsService, useValue: {numberButtons: {0:0}}}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediumButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

   /* fixtureBox = TestBed.createComponent(MediumButtonComponent);
    componentBox = fixture.componentInstance;
    fixtureBox.detectChanges();*/
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit event when click button', () => {
    //given
    const button = fixture.debugElement.query(By.css('.medium-button'));
    const buttonClickSpy = spyOn(component.buttonClick, 'emit');
    //when
    button.nativeElement.click();
    //expect
    expect(buttonClickSpy).toHaveBeenCalled();
  });

});
