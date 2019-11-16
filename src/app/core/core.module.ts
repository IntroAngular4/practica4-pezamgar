import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from '../app-routing.module';

import { FooterComponent } from './Layout/footer/footer.component';
import { HeaderComponent } from './Layout/header/header.component';
import { LayoutComponent } from './Layout/layout.component';
import { MainComponent } from './Layout/main/main.component';


@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class CoreModule {
}
