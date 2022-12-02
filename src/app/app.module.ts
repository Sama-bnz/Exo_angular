import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './_pages/dashboard/dashboard.component';
import { MessagerieComponent } from './messagerie/messagerie.component';
import { LoginComponent } from './login/login.component';
import { InterfaceComponent } from './interface/interface.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ButtonSignComponent } from './button-sign/button-sign.component';
import { InputComponent } from './_composants/input/input.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { RegisterFormComponent } from './login/register-form/register-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    DashboardComponent,
    MessagerieComponent,
    LoginComponent,
    InterfaceComponent,
    ConnexionComponent,
    CheckboxComponent,
    ButtonSignComponent,
    InputComponent,
    LoginFormComponent,
    RegisterFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
