import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CaixaDeEntradaModule } from './modules/caixa-de-entrada/caixa-de-entrada.module';
// import { HeaderComponent } from './components/header/header.component';
import { RoteamentoModule } from './routes';
import { LoginModule } from './modules/login/login.module';

@NgModule({
  declarations: [  // Components
    AppComponent
  ],
  imports: [ // Modulos
    BrowserModule,
    FormsModule,
    CaixaDeEntradaModule,
    LoginModule,
    RoteamentoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
