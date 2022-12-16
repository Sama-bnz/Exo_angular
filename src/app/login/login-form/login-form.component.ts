import { Component } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

login(){
  console.log("bonjour");
}

validateLogin(username:string) {
  console.log(username)
}

validatePassword(password:string){
  console.log(password)
}

}
