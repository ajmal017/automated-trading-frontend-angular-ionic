import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DataComponent } from './components/data/data.component';
import { AccessTokenComponent } from './components/access-token/access-token.component';
import { TradingLeveragesComponent } from './components/trading-leverages/trading-leverages.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, 
                 HomeComponent, DataComponent, 
                 AccessTokenComponent, TradingLeveragesComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
