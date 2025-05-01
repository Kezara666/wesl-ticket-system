import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketWinComponent } from './ticket-win.component';
import { TicketWinService } from './ticket-win.service';
import { AuthModule } from '../auth/auth.module';
import { MessageService } from 'primeng/api';


@NgModule({
  declarations: [],
  imports: [
    TicketWinComponent,
    AuthModule
  ],
  providers:[TicketWinService,MessageService]
})
export class TicketWinModule { }
