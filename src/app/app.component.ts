import { Component } from '@angular/core';
import { Email } from './models/email';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private _statusFormEmail = false;
  email = new Email();

  get statusFormEmail(){
    return this._statusFormEmail
  }

  toggleEmail(){
    this._statusFormEmail = !this.statusFormEmail;
  }

  handleNewEmail(eventoSubmit: Event){
    eventoSubmit.preventDefault();
    console.log(this.email);
  }

}
