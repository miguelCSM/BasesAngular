import {NgModule} from '@angular/core';

import { ContadorComponent } from './contador/contador.component';


@NgModule({
    declarations:[
        ContadorComponent
    ],
    // Cosas que quiero visibles
    exports:[
        ContadorComponent
    ],
    // aquí solo van modulos

})
export class ContadorModule{}