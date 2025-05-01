import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginComponent
  ],
  providers : [LoginService]
})
export class AuthModule { }
