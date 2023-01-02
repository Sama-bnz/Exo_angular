import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  title = 'form-rx';

  registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(10)
      ]],
       // Le '' représente la valeur par défaut 
      email: ['',
        [
          Validators.required,
          Validators.email
        ]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(10),      
      ]],
      phones: this.formBuilder.array([]),
      terms: ['', [
        Validators.requiredTrue
      ]]

});

  this.addPhone();
  }

  get username() {
    return this.registerForm.get('username');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get phones() {
    return this.registerForm.get('phones') as FormArray;
  }

  get terms() {
    return this.registerForm.get('terms');
  }

  addPhone() {
    let phone = this.formBuilder.group({
      phonePrefix: '',
      phoneNumber: ['', [
        Validators.required,
        Validators.minLength(9),
        Validators.maxLength(10),
        Validators.pattern('^[0-9]*$')
      ]]
    });

    if(this.phones.length < 3)
      this.phones.push(phone); 
  }

  getPhoneNumber(index: number) {
    return this.phones.controls[index].get('phoneNumber');
  }

  getPhonePrefix(index: number) {
    return this.phones.controls[index].get('phonePrefix');
  }

  deletePhone(index: number) {
    this.phones.removeAt(index); // Supprime là (index) 0...n
  }

  submit() {
    if (!this.registerForm.valid) {
      alert('Form is invalid')
      return;
    }

    alert('Success');
  }
}