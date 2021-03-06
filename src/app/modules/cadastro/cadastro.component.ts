import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from "rxjs/operators";
import { UserService } from 'src/app/services/user.service';
import { PageDataService } from 'src/app/services/page-data.service';

@Component({
  selector: 'cmail-cadastro',
  templateUrl: './cadastro.component.html',
  styles: []
})
export class CadastroComponent implements OnInit {

  mensagem = "";

  constructor(private http: HttpClient,
              private userService: UserService,
              private dataService: PageDataService) { }

  ngOnInit(){

    this.dataService.atualizaTitulo('Cadastro')
  }

  formCadastro = new FormGroup({
    nome: new FormControl('',
          [Validators.required,
            Validators.minLength(3),
            Validators.maxLength(100),
            Validators.pattern('[a-zA-Z\u00C0-\u00FF ]+')]
          ),
    usuario: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(40),
      Validators.pattern('[a-z0-9]+')
    ], this.validaUsuario.bind(this)),
    senha: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]),
    telefone: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\d{8,9}$/)
    ]),

    avatar: new FormControl('', Validators.required, this.validaAvatar.bind(this)),
  }, {updateOn: 'blur'});

  validaUsuario(control: FormControl){
    return this.userService
                .validarUsuario(control.value)
                .pipe(
                  map(
                    (response) => {
                      console.log(response);
                      return null
                    }
                  ),
                  catchError((erro: HttpErrorResponse) => {
                    console.log(erro.error.message);
                    return [{username: erro.error.message}]

                  })
                )
  }

  validaAvatar(control: FormControl){

    const validationError = {
      urlInvalida: true
    }

    return this
            .http
            .head(control.value, { observe: "response"})
            .pipe(
              map((httpResponse) => {
                console.log(httpResponse);
                const type = httpResponse.headers.get('Content-Type')

                //se não for uma imagem, então é invalido
                if (!type.includes('image')) {
                  return validationError
                }

                //se nao tiver erros, retornamos um null
                return null
              })
              ,catchError( (erro) => {
                console.log(erro);
                //se tiver erros, retornamos um objeto com detalhes do erro
                return [validationError]
              })
            )

  }

  handleCadastrarUsuario() {

    if(this.formCadastro.invalid){
      this.formCadastro.markAllAsTouched()
      return;
    }

    this.userService
        .cadastrar(this.formCadastro.value)
        .subscribe(
          (resposta: any) => {
            this.mensagem = `${resposta.email} cadastrado com sucesso`;
            this.formCadastro.reset();
          }
          , (erro) => {
            console.error(erro);
          }
        )

  }
}
