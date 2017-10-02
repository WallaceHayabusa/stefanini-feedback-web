import { Component } from '@angular/core';

@Component({
    selector: 'page-satisfacao',
    templateUrl: './satisfacao.html'
})
export class SatisfacaoPage {
    heightBB = 0;
    heightPF = 0;
    heightCC = 0;
    isCC: boolean;
    constructor(){

    }

    correios(heightScroll: number){
        if(this.heightCC == 0){
            this.heightCC = heightScroll; 
        }else{
            this.heightCC = 0;
        }
    }
}