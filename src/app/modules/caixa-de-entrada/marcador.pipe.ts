import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marcador'
})
export class MarcadorPipe implements PipeTransform {

  transform(destinatario: string) {
    if(destinatario.includes('chefe')){
      return `[URGENTE] ${destinatario}`
    }

    return destinatario;

  }

}
