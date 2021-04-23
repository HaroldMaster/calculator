import { MediumButtonComponent } from "./medium-button.component";
import { moduleMetadata } from '@storybook/angular';

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
        symbol: 7
      },
    });