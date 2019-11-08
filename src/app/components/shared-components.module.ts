import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { CmailFormGroupComponent } from './cmail-form-group/cmail-form-group.component';
import { CmailFormInputDirective } from './cmail-form-group/cmail-form-input.directive';

@NgModule({
  declarations: [ // Components, Directive
    HeaderComponent,
    CmailFormGroupComponent,
    CmailFormInputDirective
  ],
  exports: [
    HeaderComponent,
    CmailFormGroupComponent,
    CmailFormInputDirective
  ],
  imports: [ // Modules
    CommonModule,
    RouterModule,
  ]
})
export class SharedComponentsModule { }
