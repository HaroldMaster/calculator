import { Injectable } from '@angular/core';
import { ButtonType } from '../medium-button/medium-button.model';
import { ScreenValue } from '../number-box/number-box-model';
import { KeyPosition } from '../core/operation.model';
@Injectable({
  providedIn: 'root',
})
export class OperationsService {
  private SCREEN_MAX_LENGTH: number = 6;
  constructor() {}
  numberAndOperationButtons: { [key: number]: string } = {
    [KeyPosition.AC]: 'AC',
    [KeyPosition.seven]: '7',
    [KeyPosition.three]: '3',
    [KeyPosition.two]: '2',
    [KeyPosition.one]: '1',
    [KeyPosition.equal]: '=',
    [KeyPosition.zero]: '0',
    [KeyPosition.plus]: '+',
    [KeyPosition.less]: '-',
    [KeyPosition.eight]: '8',
    [KeyPosition.nine]: '9',
    [KeyPosition.percent]: '%',
    [KeyPosition.four]: '4',
    [KeyPosition.five]: '5',
    [KeyPosition.six]: '6',
    [KeyPosition.asterisk]: '*',
  };

  resultOnScreen: boolean = false;
  numberScreen: string = '';
  changeScreen(position: number): string {
    console.log(position); //?
    console.log(this.resultOnScreen);
    position = this.restoreAfterResult(position);

    if (this.resultOnScreen) {
      console.log('aqui');

      switch (position) {
        case ButtonType.AC:
          this.numberScreen = this.resetScreen();
          return this.numberScreen;
        case ButtonType.asterisk:
        case ButtonType.less:
        case ButtonType.plus:
        case ButtonType.percent:
          this.numberScreen = this.appendNewOperation(position);
          this.resultOnScreen = false;
          return this.numberScreen;

        default:
          this.numberScreen = this.numberAndOperationButtons[position];
          this.resultOnScreen = false;
          console.log(this.numberScreen);
          return this.numberScreen;
      }
    }

    switch (position) {
      case ButtonType.AC:
        this.numberScreen = ScreenValue.initialValue;
        return this.numberScreen;
      case ButtonType.Equal:
        this.numberScreen = this.errorHandler();
        console.log(this.resultOnScreen);
        return this.numberScreen;
      default:
        this.resultOnScreen = false;
        break;
    }

    if (
      this.numberScreen === ScreenValue.error &&
      position !== ButtonType.Equal
    ) {
      this.numberScreen = this.newOperationAfterError(position);
      return this.numberScreen;
    }

    this.newOperation(position);

    return this.numberScreen;
  }

  resolveOperation(expression: string): string {
    let result='';
    if (this.numberScreen != ScreenValue.error) {
      result = eval(expression) + '';
      this.resultOnScreen =true;
      console.log(typeof result);
      return result;
    } else {
      result = ScreenValue.initialValue;
      this.resultOnScreen = false;
      return result;
    }
  }

  private restoreAfterResult(position: number) {
    if (position == ButtonType.Equal && this.resultOnScreen == true) {
      position = ButtonType.AC;
    }
    return position;
  }

  private newOperation(position: number) {
    if (this.numberScreen.length <= this.SCREEN_MAX_LENGTH) {
      if (this.numberScreen === ScreenValue.initialValue) {
        this.numberScreen = this.numberAndOperationButtons[position] + '';
      } else {
        this.numberScreen += '' + this.numberAndOperationButtons[position];
      }
    }
  }
  private resetScreen(): string {
    return ScreenValue.initialValue;
  }
  private appendNewOperation(position: number): string {
    let append = this.numberScreen + this.numberAndOperationButtons[position];
    return append;
  }
  private errorHandler(): string {
    let screenValue = '';
    if (this.numberScreen == ScreenValue.wrongOperation) {
      screenValue = ScreenValue.error;
      return screenValue;
    } else {
      try {
        console.log(this.numberScreen)
        screenValue = this.resolveOperation(this.numberScreen);
        console.log(screenValue)
      } catch (error) {
        screenValue = ScreenValue.error;
        this.resultOnScreen = false;
        return screenValue;
      }
      return screenValue;
    }
  }

  private newOperationAfterError(position: number): string {
    let newOperation = this.numberAndOperationButtons[position] + '';
    return newOperation;
  }
}
