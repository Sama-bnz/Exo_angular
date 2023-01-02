import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  constructor(private router: Router, private httpClient: HttpClient){}

login(){
  /*this.httpClient.post('https://dummyjson.com/auth/login', puis la valeur de mon formulaire)*/
  this.router.navigate(['/messagerie']);
}

validateLogin(username:string) {
  console.log(username)
}

validatePassword(password:string){
  console.log(password)
}

}
