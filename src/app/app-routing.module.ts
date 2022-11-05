import { UserEditComponent } from './user-edit/user-edit.component';
import { AuthGuard } from './auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';

const APP_ROUTES: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 'users', canActivate: [AuthGuard], canActivateChild: [AuthGuard], component: UsersComponent, children: [
      { path: ':id/edit', canDeactivate: [AuthGuard], component: UserEditComponent },
      {
        path: ':id',
        data: {
          title: 'User list'
        },
        resolve: {
          user: AuthGuard
        },
        component: UserComponent
      }
    ]
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(APP_ROUTES)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
