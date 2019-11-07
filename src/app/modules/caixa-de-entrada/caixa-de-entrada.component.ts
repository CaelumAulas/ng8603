import { Component, OnInit } from '@angular/core';
import { Email } from 'src/app/models/email';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'cmail-caixa-de-entrada',
  templateUrl: './caixa-de-entrada.component.html',
  styles: []
})
export class CaixaDeEntradaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private _statusFormEmail = false;
  email = new Email();
  listaDeEmails = [];

  get statusFormEmail() {
    return this._statusFormEmail
  }

  toggleEmail() {
    this._statusFormEmail = !this.statusFormEmail;
  }

  handleNewEmail(formEmail: NgForm) {

    if (formEmail.invalid) {
      formEmail.control.markAllAsTouched();
      return
    }

    this.listaDeEmails.push(this.email);
    console.log(this.listaDeEmails);
    this.email = new Email();

    formEmail.reset()
  }

}
