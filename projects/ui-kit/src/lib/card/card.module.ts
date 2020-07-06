import { NgModule } from '@angular/core';
import { UiKitCardComponent } from './card.component';
import {
  UiKitCardBottomDirective,
  UiKitCardLeftDirective,
  UiKitCardRightDirective,
} from './directives';
import { BadCardComponent } from './bad-card.component';
import { UiKitButtonModule } from '../button';
import { UiKitAvatarModule } from '../avatar';

@NgModule({
  imports: [UiKitButtonModule, UiKitAvatarModule],
  declarations: [
    BadCardComponent,
    UiKitCardComponent,
    UiKitCardBottomDirective,
    UiKitCardLeftDirective,
    UiKitCardRightDirective,
  ],
  exports: [
    BadCardComponent,
    UiKitCardComponent,
    UiKitCardBottomDirective,
    UiKitCardLeftDirective,
    UiKitCardRightDirective,
  ],
})
export class UiKitCardModule {}
