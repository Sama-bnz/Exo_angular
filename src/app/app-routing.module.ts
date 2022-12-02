import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { LoginComponent } from './login/login.component';
import { RegisterFormComponent } from './login/register-form/register-form.component';
// localhost/
const routes: Routes = [

  {
    // localhost// = localhost
    path: '',
    component: LoginComponent,
    children: [
      {
        path:'',
        component: LoginFormComponent
      },
      {
        path: 'register',
        component: RegisterFormComponent
      }
    ]
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
