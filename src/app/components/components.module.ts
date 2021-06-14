import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {IonicModule} from '@ionic/angular';
import { ProfileComponent } from './profile/profile.component';
import { ReviewItemComponent } from './review-item/review-item.component';
import { FaqComponent } from './faq/faq.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule} from "@angular/router";
import { SocialComponent } from './social/social.component';

const components = [
    HeaderComponent,
    ProfileComponent,
    ReviewItemComponent,
    FaqComponent,
    FooterComponent
];

@NgModule({
  declarations: [...components, SocialComponent],
    exports: [...components, SocialComponent],
    imports: [
        CommonModule,
        IonicModule,
        RouterModule
    ]
})
export class ComponentsModule { }
