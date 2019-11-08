import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'cmail-form-group',
  templateUrl: './cmail-form-group.component.html'
})
export class CmailFormGroupComponent {

  elemento;

  constructor(elemento: ElementRef) {
    this.elemento = elemento.nativeElement;
  }

  ngOnInit() {
    console.log('teste', this.elemento.querySelector('input'));
  }

}
