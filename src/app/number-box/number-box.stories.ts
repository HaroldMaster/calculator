import { moduleMetadata } from '@storybook/angular';
import { NumberBoxComponent } from "./number-box.component";

export default {
    title: 'Number box',
    component: NumberBoxComponent,
    decorators: [
      moduleMetadata({
        imports: [],
        providers: [],
      }),
    ],
    };

    export const mediumButton = () => ({
      component: NumberBoxComponent,
      props: {
        screenNumber: 7
      },
    });