import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserCardComponent } from './user-card/user-card.component';
import { UiKitCardModule, UiKitButtonModule, UiKitAvatarModule } from 'ui-kit';

@NgModule({
  declarations: [AppComponent, UserListComponent, UserCardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiKitCardModule,
    UiKitButtonModule,
    UiKitAvatarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
