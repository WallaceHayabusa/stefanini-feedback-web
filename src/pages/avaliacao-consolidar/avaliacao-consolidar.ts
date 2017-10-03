import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'avaliacao-consolidar-page',
    templateUrl: './avaliacao-consolidar.html'
})
export class AvaliacaoConsolidarPage {

    height1 = 0;
    height2 = 0;
    height3 = 0;
    height4 = 0;

    constructor(private nav: NavController) {

    }

    back() {
        this.nav.pop();
    }
        

}