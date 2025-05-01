import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TicketWinModule } from './ticket-win/ticket-win.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from './auth/auth.module';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { Ripple } from 'primeng/ripple';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TicketWinModule,AuthModule,ToastModule,Ripple],
  providers:[MessageService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'wesl-ticket-system';

    
}
