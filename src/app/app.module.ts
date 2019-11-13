import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CaixaDeEntradaModule } from './modules/caixa-de-entrada/caixa-de-entrada.module';
// import { HeaderComponent } from './components/header/header.component';

import { LoginModule } from './modules/login/login.module';
import { CadastroModule } from './modules/cadastro/cadastro.module';
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [  // Components
    AppComponent
  ],
  imports: [ // Modulos
    BrowserModule,
    FormsModule,
    CaixaDeEntradaModule,
    CadastroModule,
    LoginModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
