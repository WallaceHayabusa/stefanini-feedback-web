import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from './../pages/login/login';
import { ProdutividadePage } from './../pages/produtividade/produtividade';
import { SatisfacaoPage } from './../pages/satisfacao/satisfacao';
import { AvaliacaoPage } from './../pages/avaliacao/avaliacao';
import { PdiPage } from './../pages/pdi/pdi';
import { AvaliacaoConsolidarPage } from './../pages/avaliacao-consolidar/avaliacao-consolidar';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ProdutividadePage,
    SatisfacaoPage,
    AvaliacaoPage,
    AvaliacaoConsolidarPage,
    PdiPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    ProdutividadePage,
    SatisfacaoPage,
    AvaliacaoPage,
    AvaliacaoConsolidarPage,
    PdiPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
