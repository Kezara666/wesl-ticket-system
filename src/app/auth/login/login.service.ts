import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../../ticket-win/event.dto';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // Getter for the logged-in state
  loggedUsed = signal(false);

  setTrue() {
    this.loggedUsed.set(true); // Set signal value to true
  }

  setFalse() {
    this.loggedUsed.set(false); // Set signal value to false
  }

  get sharedState() {
    return this.loggedUsed()
  }
}
