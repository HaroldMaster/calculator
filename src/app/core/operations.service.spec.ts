import { ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';

import { OperationsService } from './operations.service';

describe('OperationsService', () => {
  let service: OperationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OperationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should change the screen', () => {
    //given
    //when
    service.changeScreen(1);
    //expect
    expect(service.numberScreen).toEqual('7');
  });

  it('should resolve te operation', () => {
    //given
    service.numberScreen = '3+8';
    //when
    let result = service.resolveOperation(service.numberScreen);
    //expect
    expect(result).toEqual('11');
  });

  it('should empty the number box', () => {
    //given
    //when
    service.changeScreen(0);
    //expect
    expect(service.numberScreen).toEqual('0');
  });

  it('should clean screen when result exist', () => {
    //given
    service.resultOnScreen = true;
    service.numberScreen = '85';
    //when
    service.changeScreen(3);
    //expect
    expect(service.numberScreen).toEqual('2');
  })

  it('should setup screen to zero position is AC', () => {
    //given
    service.resultOnScreen = true;
    service.numberScreen = '85';
    //when
    service.changeScreen(0);
    //expect
    expect(service.numberScreen).toEqual('0');
  })

  it('should replace zero after', () => {
    //given
    service.resultOnScreen = false;
    service.numberScreen = '0';
    //when
    service.changeScreen(2);
    //expect
    expect(service.numberScreen).toEqual('3');
  })

  it('should display Syntax error when numberScreen is invalid', () => {
    //given
    service.numberScreen = 'undefined';
    //when
    service.changeScreen(5);
    //expect
    expect(service.numberScreen).toEqual('Syntax error');
  });

  it('should display operation result when press equal', () => {
    //given
    service.numberScreen = '5+5';
    //when
    service.changeScreen(5);
    //expect
    expect(service.numberScreen).toEqual('10');
  });

  it('should display operation result when press equal', () => {
    //given
    service.numberScreen = '%%*9';
    //when
    service.changeScreen(5);
    //expect
    expect(service.numberScreen).toEqual('Syntax error');
  });

  it('should clear resultOnScreen after invalid operation', () => {
    //given
    service.numberScreen = '%%*9';
    //when
    service.changeScreen(5);
    service.changeScreen(2);
    service.changeScreen(4);
    //expect
    expect(service.numberScreen).toEqual('31');
  });

  it('should do another operation after syntax error', () => {
    //given
    service.numberScreen = '%%*9';
    //when
    service.changeScreen(5);
    service.changeScreen(5);
    service.changeScreen(2);
    //expect
    expect(service.numberScreen).toEqual('3');
  });
  
  it('should allow enter antoher operation after having a result',() => {
    //given
    service.resultOnScreen= true;
    service.numberScreen= '81';
    //when
    service.changeScreen(2);
    service.changeScreen(7);
    service.changeScreen(15);
    //expect
    expect(service.numberScreen).toEqual('3+6');

  });
  
  it('should show the zero after press equal',()=>{
    //given
    service.resultOnScreen=true;
    service.numberScreen = '6';
    //when
    service.changeScreen(5);
    //expect
    expect(service.numberScreen).toEqual('0');
  });

  it('should concatenate the result when press operator symbol',()=>{
    //given
    service.resultOnScreen=true;
    service.numberScreen = '6';
    //when
    service.changeScreen(7);
    service.changeScreen(1);
    //expect
    expect(service.numberScreen).toEqual('6+7');
  });

  it('should create a new operation after having a result', ()=> {
    //given
    service.resultOnScreen=true;
    service.numberScreen = '81';
    //when
    service.changeScreen(4);
    //expect
    expect(service.numberScreen).toEqual('1');
  });
});
