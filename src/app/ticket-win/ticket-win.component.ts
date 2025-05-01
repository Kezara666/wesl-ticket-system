import { Component } from '@angular/core';
import { TicketWinService } from './ticket-win.service';
import { EventShow, User } from './event.dto';
import { CommonModule } from '@angular/common';
import { LoginService } from '../auth/login/login.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-ticket-win',
  standalone: true,
  imports: [CommonModule],

  templateUrl: './ticket-win.component.html',
  styleUrl: './ticket-win.component.scss'
})
export class TicketWinComponent {

  events: EventShow[] = []; // Array to store the fetched events
  selectedUser?: User;
  isLoading = false;

  constructor(private ticketWinService: TicketWinService, private loginService: LoginService, private router: Router,private messageService: MessageService) { }

  isModalOpen = false; // Controls whether the modal is visible


  // Open the modal
  openModal(): void {
    this.isModalOpen = true;
  }

  // Close the modal
  closeModal(): void {
    this.isModalOpen = false;
  }

  ngOnInit(): void {
    this.isLoading = true;
    
    // Call the service method to fetch all shows
    this.ticketWinService.getAllShows().subscribe(
      (response: any) => {
        console.log('API Response:', response); // Log the response for debugging
        if (response && response.allShows) {
          this.events = response.allShows; // Assign the fetched data to the events array
          this.isLoading = false;
          this.messageService.add({ severity: 'success', summary: 'Shows Avaible', detail:'Shows fetch success' });
        } else {
          this.isLoading = false;
          console.error('Unexpected API response:', response);
          this.messageService.add({ severity: 'error', summary: 'Error', detail:'Error Fetch Shows' });
        }
      },
      (error) => {
        //this.isLoading = false;

        console.error('Error fetching events:', error);
        this.messageService.add({ severity: 'error', summary: 'Error', detail:'Error Fetch Shows' });
      }
    );
  }

  // Handle card click
  onCardClick(event: any): void {
    this.isLoading = true;
    console.log('Card clicked:', event);
    // Extract showId from the clicked event
    const event_name = event.event_name; // Assuming `show_id` is the field in the event object
    // Call the getReffle() method with the event_name
    this.ticketWinService.getReffle(event_name).subscribe(
      (response: any) => {
        if (response && response.winners && response.winners.length > 0) {
          // Extract the first winner from the array
          this.selectedUser = response.winners[0];
          console.log('Selected Winner:', this.selectedUser);
          this.openModal();
          this.isLoading = false;
        } else {
          console.warn('No winners found for the given event_name');
          this.isLoading = false;
          this.messageService.add({ severity: 'error', summary: 'Error', detail:'No Winners Yet' });
        }
      },
      (error) => {
        console.error('Error fetching winners:', error);
        this.isLoading = false;
        this.messageService.add({ severity: 'error', summary: 'Error', detail:"No winners Yet" });
      }
    );
  }


}
