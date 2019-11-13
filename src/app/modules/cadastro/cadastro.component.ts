import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserInputDTO } from 'src/app/models/dto/user-input';
import { map, catchError } from "rxjs/operators";

@Component({
  selector: 'cmail-cadastro',
  templateUrl: './cadastro.component.html',
  styles: []
})
export class CadastroComponent {

  mensagem = "";

  constructor(private http: HttpClient) { }

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
    ]),
    senha: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]),
    telefone: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\d{8,9}$/)
    ]),

    avatar: new FormControl('', Validators.required, this.validaAvatar.bind(this)),
  });

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

    //DTO - Data transfer object
    let userDTO = new UserInputDTO(this.formCadastro.value);

    this.http.post(
      'http://localhost:3200/users',
      userDTO
    ).subscribe(
      (resposta: any) => {
        console.log(resposta);
        //template string
        this.mensagem = `${resposta.email} cadastrado com sucesso`;
        this.formCadastro.reset();
      }
      , (erro) => {
        console.error(erro);
        console.error('deu ruim')
      }
    )

  }
}


//function expression
function haha(){

}

//arrow function
() => {

}
