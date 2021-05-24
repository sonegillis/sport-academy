import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {IonicModule} from '@ionic/angular';
import { ProfileComponent } from './profile/profile.component';
import { ReviewItemComponent } from './review-item/review-item.component';
import { FaqComponent } from './faq/faq.component';
import { FooterComponent } from './footer/footer.component';

const components = [
    HeaderComponent,
    ProfileComponent,
    ReviewItemComponent,
    FaqComponent,
    FooterComponent
];

@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
