import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {Route, RouterModule} from '@angular/router';
import {ComponentsModule} from '../../components/components.module';
import {IonicModule} from '@ionic/angular';
import {IvyCarouselModule} from "angular-responsive-carousel";

const routes: Route[] = [
  {
    path: '',
    component: HomeComponent
  }
]

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(routes),
    IonicModule,
    IvyCarouselModule
  ]
})
export class HomeModule { }
