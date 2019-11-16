import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from '../app-routing.module';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule {
}
