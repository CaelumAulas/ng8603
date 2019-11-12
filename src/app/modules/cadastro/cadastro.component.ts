import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

  marcaCamposComoTouched() {
    const formControlKeys = Object.keys(this.formCadastro.controls);
    formControlKeys.forEach((formControlName) => {
      this.formCadastro.get(formControlName).markAsTouched({ onlySelf: true });
    })
  }

  handleInput() {
    console.log(this.formCadastro.get('nome').touched)
    localStorage.setItem('/cadastro[form]', JSON.stringify(this.formCadastro.value));
  }

  handleCadastrarUsuario() {
    this.marcaCamposComoTouched();

    console.log('form ta valido?', this.formCadastro.valid);
    console.log(this.formCadastro.controls);
  }
}
