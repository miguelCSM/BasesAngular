import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent   {
  heroes: string[]=['Spiderman', 'Thor', 'Hulk', 'Black Widow', 'Capitan América']
  heroeEliminado:string ='';

  borrarHeroe(){
    this.heroeEliminado = this.heroes.shift() || "";
  }
}
