import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
    selector: 'pdi-page',
    templateUrl: './pdi.html'
})
export class PdiPage {

    constructor(private nav: NavController){

    }

    back(){
        this.nav.pop();
    }

}