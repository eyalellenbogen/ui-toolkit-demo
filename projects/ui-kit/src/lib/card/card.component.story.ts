import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { UiKitCardModule } from './card.module';

storiesOf('ui-kit/Card', module)
  .addDecorator(
    moduleMetadata({
      imports: [UiKitCardModule],
    })
  )
  .add('Templates', () => ({
    template: `
        <uikit-card>
        <uikit-card-left>
        <div class="background-color-dark color-light width-sm p-sm">
        Content on the left
        </div>
    </uikit-card-left>
    <uikit-card-right>
        <div class="background-color-dark color-light width-sm p-sm">
        Content on the right
        </div>
        </uikit-card-right>
            <uikit-card-bottom>
        <div class="background-color-dark color-light width-sm p-sm">
        Content on the bottom
        </div>
        </uikit-card-bottom>
        </uikit-card>
    `,
  }));
