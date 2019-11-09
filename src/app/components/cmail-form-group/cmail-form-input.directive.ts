import { Directive, ElementRef } from "@angular/core";
@Directive({
  selector: '[cmailFormInput]'
})
export class CmailFormInputDirective {
  // Manipular o elemento que recebe ela // Injeção de dependencia
  constructor(elemento: ElementRef) {
    elemento.nativeElement.setAttribute('class', 'mdl-textfield__input')
  }
}
// Lembra de:
// - colocar no declarations do  SharedComponentsModule
// - colocar no exports do  SharedComponentsModule

// Procura no github: ng8603
