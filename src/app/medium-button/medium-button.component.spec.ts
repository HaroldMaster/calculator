import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { OperationsService } from '../core/operations.service';
import { MediumButtonComponent } from './medium-button.component';


describe('MediumButtonComponent', () => {
  let component: MediumButtonComponent;
  let fixture: ComponentFixture<MediumButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediumButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediumButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit event when click button', () => {
    //given
    component.numberAndOperationButtons = {2:'7'};
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('.medium-button'));
    const buttonClickSpy = spyOn(component.buttonClick, 'emit');
    //when
    button.nativeElement.click();
    //expect
    expect(buttonClickSpy).toHaveBeenCalled();
  });

});
