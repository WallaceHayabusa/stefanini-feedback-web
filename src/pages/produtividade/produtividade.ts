import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'produtividade-page',
    templateUrl: 'produtividade.html'
})
export class ProdutividadePage {

    constructor(private nav: NavController) {

    }

    back() {
        this.nav.pop();
    }

}