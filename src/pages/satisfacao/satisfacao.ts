import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-satisfacao',
    templateUrl: './satisfacao.html'
})
export class SatisfacaoPage {
    heightBB = 0;
    heightPF = 0;
    heightCC = 0;
    isCC: boolean;

    constructor(private nav: NavController) {

    }

    back() {
        this.nav.pop();
    }

    correios(heightScroll: number){
        if(this.heightCC == 0){
            this.heightCC = heightScroll; 
        }else{
            this.heightCC = 0;
        }
    }
}