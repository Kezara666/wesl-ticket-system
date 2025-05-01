import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, ToastModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email = '';
  password = ''


  constructor(private loginService: LoginService, private router: Router, private messageService: MessageService) { }


  login() {
    if (this.email == 'test@gmail.com' && this.password == '1234') {
      this.router.navigate(['/ticket']);
    }
    else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Enter Valid Credentials' });

    }
  }

}
