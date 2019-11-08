import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro.component';
import { SharedComponentsModule } from '../../components/shared-components.module';



@NgModule({
  declarations: [CadastroComponent],
  imports: [
    CommonModule,
    SharedComponentsModule,
  ],
  exports: [CadastroComponent]
})
export class CadastroModule { }
