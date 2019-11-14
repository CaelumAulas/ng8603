import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'cmail-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = {
    email: '',
    senha: ''
  }

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  handleLogin(){

    const loginDTO = {
      email: this.login.email,
      password: this.login.senha
    }

    this.http
        .post('http://localhost:3200/login',loginDTO)
        .subscribe(
          (resposta: any) => {

            localStorage.setItem('cmail-token', resposta.token)

            console.log(resposta);
            console.log('deu certo');
          }
          , erro => console.log(erro)
        )

    console.log(this.login);

  }

}
