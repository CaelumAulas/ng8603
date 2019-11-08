import { Component, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'cmail-form-group',
  templateUrl: './cmail-form-group.component.html'
})
export class CmailFormGroupComponent {
  elemento;
  conteudoDaLabel: string;
  constructor(elemento: ElementRef) {
    this.elemento = elemento.nativeElement;
  }
  ngOnInit() {
    // Sempre que criarmos uma variavel com $ prefixando, ela deveria possuir um elemento
    const $input = this.elemento.querySelector('input');
    this.conteudoDaLabel = $input.getAttribute('placeholder');
    $input.setAttribute('placeholder', ' ')

  }
}
