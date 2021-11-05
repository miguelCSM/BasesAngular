import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';

import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations:[
        HeroeComponent,
        ListadoComponent
    ],
    // Cosas que quiero visibles
    exports:[
        ListadoComponent
    ],
    imports:[
       CommonModule
        // permite usar ngfor ngif
    ]
    // aquí solo van modulos

})
export class HeroesModule{}