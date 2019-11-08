import { Routes, RouterModule } from '@angular/router';
import { CaixaDeEntradaComponent } from './modules/caixa-de-entrada/caixa-de-entrada.component';
import { LoginComponent } from './modules/login/login.component';
import { CadastroComponent } from './modules/cadastro/cadastro.component';
const rotas: Routes = [
  { path: '', component: CaixaDeEntradaComponent  },
  { path: 'login', component: LoginComponent  },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'logar', redirectTo: 'login' },
  { path: '**', redirectTo: 'login' } // Criar uma página 404
];
export const RoteamentoModule = RouterModule.forRoot(rotas);
