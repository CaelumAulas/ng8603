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

  private _statusFormEmail = false;
  listaDeEmails: Email[] = [];
  email = new Email();

  constructor(private emailService: EmailService) { }

  ngOnInit() {
    this.listarEmails();
  }

  listarEmails() {

    this.emailService
        .listar()
        .subscribe(
          (listaEmailApi) => {
            this.listaDeEmails = listaEmailApi;
            console.log(this.listaDeEmails)
          }
        )
  }

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
          () => {
            this.listarEmails();
            this.toggleEmail();
            this.email = new Email();
            formEmail.reset()
          },
          (erro) => {
            console.error(erro);
          }
        )

  }

  removerEmail(evento, emailId:string){
    //console.log(evento);

    if(confirm('Vc tem certeza?')){
      this.emailService
          .deletar(emailId)
          .subscribe(
            () => {
              console.log(`apagou com sucesso`);
              this.listarEmails();
            }
          )
    }

  }

}
