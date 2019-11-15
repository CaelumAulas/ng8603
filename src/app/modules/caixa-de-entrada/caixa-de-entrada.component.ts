import { Component, OnInit } from '@angular/core';
import { Email } from 'src/app/models/email';
import { NgForm } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'cmail-caixa-de-entrada',
  templateUrl: './caixa-de-entrada.component.html',
  styles: [`
    ul, li {
      list-style: none;
      margin: 0;
      padding: 0;
    }
  `]
})
export class CaixaDeEntradaComponent implements OnInit {

  constructor(private emailService: EmailService) { }

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

    this.emailService
        .enviar(this.email)
        .subscribe(
          (sucesso) => {
            console.log(sucesso);
          },
          (erro) => {
            console.error(erro);
          }
        )

    this.listaDeEmails.push(this.email);
    console.log(this.listaDeEmails);
    this.email = new Email();

    formEmail.reset()
  }

}
