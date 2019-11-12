import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'cmail-cadastro',
  templateUrl: './cadastro.component.html',
  styles: []
})
export class CadastroComponent {

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

    avatar: new FormControl('', Validators.required),
  });

  constructor(private http: HttpClient){}

  // marcaCamposComoTouched() {
  //   const formControlKeys = Object.keys(this.formCadastro.controls);
  //   formControlKeys.forEach((formControlName) => {
  //     this.formCadastro.get(formControlName).markAsTouched({ onlySelf: true });
  //   })
  // }

  handleCadastrarUsuario() {

    if(this.formCadastro.invalid){
      this.formCadastro.markAllAsTouched()
      return;
    }

    let formIngles = {
      name: this.formCadastro.get('nome').value,
      username: this.formCadastro.get('usuario').value,
      phone: this.formCadastro.get('telefone').value,
      password: this.formCadastro.get('senha').value,
      avatar: this.formCadastro.get('avatar').value
    }

    this.http.post(
      'http://localhost:3200/users',
      formIngles
    ).subscribe()

    console.log(formIngles);


  }
}
