import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { GaleriaComponent } from '../app/galeria/galeria.component';
import { CarniceriaComponent } from './carniceria/carniceria.component';
import { ParqueComponent } from './parque/parque.component';
import { EsteticaComponent } from './estetica/estetica.component';
import { GaleraComponent } from './galera/galera.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { RestauranteComponent } from './restaurante/restaurante.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MinimarketComponent } from './minimarket/minimarket.component';
import { MecanicaComponent } from './mecanica/mecanica.component';




const appRoutes: Routes=[
  {path: '',component: IndexComponent },
  {path: 'galeria',component: GaleriaComponent },
  {path: 'galera',component: GaleraComponent },
  {path: 'Carniceria',component: CarniceriaComponent },
  {path: 'Estética',component: EsteticaComponent },
  {path: 'Restaurante',component: RestauranteComponent },
  {path: 'Parque',component: ParqueComponent },
  {path: 'Mecánica',component: MecanicaComponent },
  {path: 'Mini Market',component: MinimarketComponent },
  {path: 'about-us',component: AboutUsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CarniceriaComponent,
    ParqueComponent,
    EsteticaComponent,
    GaleraComponent,
    MenuComponent,
    FooterComponent,
    RestauranteComponent,
    IndexComponent,
    AboutUsComponent,
    MinimarketComponent,
    MecanicaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

