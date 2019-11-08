import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaixaDeEntradaComponent } from './caixa-de-entrada.component';
import { FormsModule } from '@angular/forms';
import { SharedComponentsModule } from '../../components/shared-components.module';

@NgModule({
  declarations: [
    CaixaDeEntradaComponent
  ],
  imports: [
    SharedComponentsModule,
    CommonModule,
    FormsModule,
  ],
  exports: [CaixaDeEntradaComponent]
})
export class CaixaDeEntradaModule { }
