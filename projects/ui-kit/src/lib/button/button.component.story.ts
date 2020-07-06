
import { storiesOf } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { UiKitButtonModule } from './button.module';

storiesOf('ui-kit/Button', module)
  .addDecorator(
    moduleMetadata({
      imports: [UiKitButtonModule],
    })
  )
  .add('primary', () => ({
    template: `
        <button [uikitButton]="'primary'">click me!</button>
    `,
  }))
  .add('secondary', () => ({
    template: `
        <button [uikitButton]="'secondary'">click me!</button>
    `,
  }));
