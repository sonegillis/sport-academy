import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {IonicModule} from '@ionic/angular';
import { ProfileComponent } from './profile/profile.component';
import { ReviewItemComponent } from './review-item/review-item.component';



@NgModule({
  declarations: [HeaderComponent, ProfileComponent, ReviewItemComponent],
    exports: [
        HeaderComponent,
        ProfileComponent,
        ReviewItemComponent
    ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
