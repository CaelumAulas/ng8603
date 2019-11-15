import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { UserInputDTO } from '../models/dto/user-input';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

  private url = environment.urlApi + '/users';

  constructor(private http: HttpClient){}

  cadastrar(dadosUsuario): Observable<Object> {

    const userDataDTO = new UserInputDTO(dadosUsuario)

    return this.http.post(this.url, userDataDTO)

  }

}
