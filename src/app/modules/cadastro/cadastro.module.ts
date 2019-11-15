import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro.component';
import { SharedComponentsModule } from '../../components/shared-components.module';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from "@angular/common/http";
import { CadastroRoutingModule } from './cadastro-routing.module';
import { UserService } from 'src/app/services/user.service';

@NgModule({
  declarations: [CadastroComponent],
  imports: [
    CommonModule,
    SharedComponentsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CadastroRoutingModule
  ],
  exports: [CadastroComponent],
  providers: [UserService]
})
export class CadastroModule { }
