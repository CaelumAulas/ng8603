import { Routes, RouterModule } from '@angular/router';
import { CaixaDeEntradaComponent } from './modules/caixa-de-entrada/caixa-de-entrada.component';
import { LoginComponent } from './modules/login/login.component';
const rotas: Routes = [
  { path: '', component: CaixaDeEntradaComponent  },
  { path: 'login', component: LoginComponent  },
  // Cadastro é com vocês ;)
];
export const RoteamentoModule = RouterModule.forRoot(rotas);
