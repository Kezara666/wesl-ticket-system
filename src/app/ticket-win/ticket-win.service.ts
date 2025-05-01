import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EventShow, User } from './event.dto';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TicketWinService {
  private apiUrlGetAllShows = environment.backendAPI+'/event/getAllShows'; // API endpoint URL
  private apiUrlCheckAndSaveWinners = environment.backendAPI+'/event/check-and-save-winners'; // API endpoint URL

  constructor(private http: HttpClient) {}

  // Method to fetch all shows
  getAllShows(): Observable<EventShow[]> {
    return this.http.post<EventShow[]>(this.apiUrlGetAllShows, {}); // Use POST request as per your backend
  }

  //reffle
  getReffle(event_name: string): Observable<User> {
    // Include the showId in the request body
    const requestBody = { event_name };
    // Send the POST request with the showId
    return this.http.post<User>(this.apiUrlCheckAndSaveWinners, requestBody);
  }
}