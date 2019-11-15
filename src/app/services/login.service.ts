import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  private url =  environment.urlApi+'/login';

  constructor(private http: HttpClient){}

  //object destructuring
  autenticar({email,senha}){

    const loginDTO = {
      email: email,
      password: senha
    }

    return this.http
              .post(this.url, loginDTO)
              .pipe(
                map((respostaApi: any) => {
                    localStorage.setItem('cmail-token', respostaApi.token)
                  }
                )
              )

  }

}
