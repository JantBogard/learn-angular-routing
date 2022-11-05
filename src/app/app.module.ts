import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UserComponent } from './user/user.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserEditComponent } from './user-edit/user-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HomePageComponent,
    UserComponent,
    NotFoundComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
