import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

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

}
