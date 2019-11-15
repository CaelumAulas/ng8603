import { Component } from '@angular/core';
import { PageDataService } from 'src/app/services/page-data.service';

@Component({
  selector: 'cmail-header',
  templateUrl: './header.component.html',
  styleUrls: [
    './header.component.css',
    './header-search.css'
  ]
})
export class HeaderComponent {

  statusMenu = false;
  titulo = "";

  constructor(private pageData: PageDataService){

    pageData.tituloDaPagina
            .subscribe((tituloNovo) =>{
              this.titulo =  tituloNovo;
            })

  }

  mostraMenu (){
    this.statusMenu = !this.statusMenu;
  }

}
