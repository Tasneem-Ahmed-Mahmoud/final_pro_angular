import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 import { AuthModule } from './auth/auth.module';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:"register", component:RegisterComponent},
  {path:"login",component:LoginComponent},
  // {
  //   path: 'login',
  //   loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  // },
  // {
  //   path: 'register',
  //   loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  // },

{path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

