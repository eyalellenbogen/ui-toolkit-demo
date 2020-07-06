import { NgModule } from '@angular/core';
import { UiKitCardModule } from './card/card.module';
import { UiKitButtonModule } from './button/button.module';
import { UiKitAvatarModule } from './avatar/avatar.module';

@NgModule({ imports: [UiKitCardModule, UiKitButtonModule, UiKitAvatarModule] })
export class UiKitModule {}
