import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Importando da biblioteca http as rotinas HttpClientModule do angular possibilita manipular os dados do banco de dados
import {HttpClient, HttpClientModule} from '@angular/common/http'
//Esse import possibilita utilizar forms no angular
import {FormsModule} from '@angular/forms'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { CadastrarComponent } from './componentes/cadastrar/cadastrar.component';
import { EditarComponent } from './componentes/editar/editar.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    CadastrarComponent,
    EditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
