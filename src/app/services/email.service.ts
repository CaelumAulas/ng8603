import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EmailApi } from "src/app/models/email-api";
import { Email } from '../models/email';
@Injectable()
export class EmailService {

  private url = environment.urlApi + '/emails';

  private httpOptions = {
    headers: { 'Authorization': localStorage.getItem('cmail-token') }
  }

  constructor(private http: HttpClient) { }

  enviar({destinatario, assunto, conteudo}): Observable<Object> {

    const emailDTO = {
      to: destinatario,
      subject: assunto,
      content: conteudo
    }

    return this.http.post(this.url,emailDTO,this.httpOptions)
  }

  listar(): Observable<Email[]> {
    return this.http
                .get(this.url, this.httpOptions)
                .pipe(
                  map(
                    (listaEmailsApi: any[]) => {

                      return listaEmailsApi.map((emailIngles: EmailApi)=> {

                        const emailDTO: Email = {
                          destinatario: emailIngles.to,
                          assunto: emailIngles.subject,
                          conteudo: emailIngles.content,
                          id: emailIngles.id,
                          dataEnvio: emailIngles.created_at
                        }

                        return emailDTO;

                      })

                    }
                  )
                )
  }

}
