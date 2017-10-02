import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ProdutividadePage } from './../produtividade/produtividade';
import { SatisfacaoPage } from './../satisfacao/satisfacao';
import { AvaliacaoPage } from './../avaliacao/avaliacao';
import { PdiPage } from './../pdi/pdi';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToProdutividade() {
    this.navCtrl.push(ProdutividadePage);
  }

  goToSatisfacao() {
    this.navCtrl.push(SatisfacaoPage);
  }

  goToAvaliacao() {
    this.navCtrl.push(AvaliacaoPage);
  }

  goToPdi() {
    this.navCtrl.push(PdiPage);
  }
}
