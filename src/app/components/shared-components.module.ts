import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { CmailFormGroupComponent } from './cmail-form-group/cmail-form-group.component';

@NgModule({
  declarations: [ // Components
    HeaderComponent,
    CmailFormGroupComponent
  ],
  exports: [
    HeaderComponent,
    CmailFormGroupComponent
  ],
  imports: [ // Modules
    CommonModule,
    RouterModule,
  ]
})
export class SharedComponentsModule { }
