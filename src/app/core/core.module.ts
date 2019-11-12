import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './Layout/layout.component';
import { HeaderComponent } from './Layout/header/header.component';
import { MainComponent } from './Layout/main/main.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';


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
