import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageDataService {

  tituloDaPagina = new Subject<string>();

  atualizaTitulo(novoTitulo){
    document.title = `${novoTitulo} - CMail`;
    this.tituloDaPagina.next(novoTitulo);
  }

}
