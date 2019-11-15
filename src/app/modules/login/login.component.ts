import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'cmail-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = {
    email: 'vanessa@cmail.com.br',
    senha: '123'
  }

  constructor(private loginService: LoginService
              ,private roteador: Router) { }

  ngOnInit() {
  }

  handleLogin(formLogin: NgForm){

    if(formLogin.invalid){
      formLogin.control.markAllAsTouched();
      return;
    }
    this.loginService
        .autenticar(this.login)
        .subscribe(
          () => this.roteador.navigate(['inbox'])
          , erro => console.log(erro)
        )

  }

}
