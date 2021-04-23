import { TestBed } from '@angular/core/testing';

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
    service.numberScreen='3+8';
    //when
    service.resolveOperation(service.numberScreen);
    //expect
    expect(service.numberScreen).toEqual('11');
  });



  it('should empty the number box', () => {
      //given
      service.numberScreen = '8';
      //when
      service.emptyScreen();
      //expect
      expect(service.numberScreen).toEqual('0');
  }


  );


});
