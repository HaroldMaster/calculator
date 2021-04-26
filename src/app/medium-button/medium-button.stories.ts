import { MediumButtonComponent } from "./medium-button.component";
import { moduleMetadata } from '@storybook/angular';
import { KeyPosition } from "../core/operation.model";

export default {
    title: 'Medium box',
    component: MediumButtonComponent,
    decorators: [
      moduleMetadata({
        imports: [],
        providers: [],
      }),
    ],
    };

    export const mediumButton = () => ({
      component: MediumButtonComponent,
      props: {
        numberAndOperationButtons : {
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
        }
      },
    });