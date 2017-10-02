import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';

import { HomePage } from './../home/home';
@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {

    constructor(public navCtrl: NavController) {

    }

    irParaPaginaHome() {
        this.navCtrl.push(HomePage);
    }
}