import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AccessTokenComponent } from './components/access-token/access-token.component';
import { DataComponent } from './components/data/data.component';
import { TradingLeveragesComponent } from './components/trading-leverages/trading-leverages.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'home', component: HomeComponent },
  { path: 'access-token', component: AccessTokenComponent },
  { path: 'data', component: DataComponent },
  { path: 'trading-leverages', component: TradingLeveragesComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
