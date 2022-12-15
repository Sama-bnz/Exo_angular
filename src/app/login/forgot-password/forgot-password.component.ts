import { Component } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {

  login(){
    console.log("yo");
  }

  validateLogin(login:string){
    console.log(login)
  }
}
