import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';

import { AvaliacaoConsolidarPage } from './../avaliacao-consolidar/avaliacao-consolidar';

@Component({
    selector: 'avaliacao-page',
    templateUrl: './avaliacao.html'
})
export class AvaliacaoPage {

    constructor(public navCtrl: NavController) {

    }

    goToConsolidarAvaliacao() {
        this.navCtrl.push(AvaliacaoConsolidarPage);
    }
}