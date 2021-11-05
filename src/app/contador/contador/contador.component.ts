import {Component} from '@angular/core';
@Component({
    selector:'app-contador',
    templateUrl: './contador.component.html' ,
})

export class ContadorComponent{
  title = 'Angular app';
  numero: number = 0;

  // sumar(){
  //   this.numero +=1;
  // }
  // restar(){
  //   this.numero -=1;
  // }

  acumular(valor:number){
    this.numero+=valor;
  }

  base:number = 10
}