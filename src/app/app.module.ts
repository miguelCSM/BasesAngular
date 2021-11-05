import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contadores.module';
import { AppComponent } from './app.component';





@NgModule({
  // Componentes
  declarations: [
    AppComponent
  ],
  //Otros modulos
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule
  ],
  // Servicios especificos a un modulo
  providers: [],
  // El componente que se quiere lanzar primero
  bootstrap: [AppComponent]
})
export class AppModule { }
