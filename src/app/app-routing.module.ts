import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditarComponent } from './componentes/editar/editar.component';
import { CadastrarComponent } from './componentes/cadastrar/cadastrar.component';
import { InicioComponent } from './componentes/inicio/inicio.component';


const routes: Routes = [
  {path:'', redirectTo:'/inicio', pathMatch:'full'},
  {path:'inicio', component:InicioComponent},
  {path:'cadastrar', component:CadastrarComponent},
  {path:'editar/:id', component:EditarComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
