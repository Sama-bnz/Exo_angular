import { Component } from '@angular/core';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent {

  validateName(name:string) {
    console.log(name)
  }

  validateBirthday(birthday:string) {
    console.log(birthday)
  }

  validateLogin(username:string) {
    console.log(username)
  }

  validatePassword(password:string) {
    console.log(password)
  }
  
  validateRepeatPassword(repeat:string) {
    console.log(repeat)
  }

  login(){
    console.log("bonjour");
  }

}
