import { Routes } from '@angular/router';
import { TicketWinComponent } from './ticket-win/ticket-win.component';
import { LoginComponent } from './auth/login/login.component';

export const routes: Routes = [
    // Route to handle ticket verification
    {
        path: '',
        component: LoginComponent,
    },
    {
        path: 'ticket',
        component: TicketWinComponent,
    },
    {
        path: 'login',
        component : LoginComponent
    },
    {
        path: '**',
        redirectTo: '/events',
    },
];
