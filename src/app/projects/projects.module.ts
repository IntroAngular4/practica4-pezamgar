import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { ViewerprojectComponent } from './viewerproject/viewerproject.component';
import { NewprojectComponent } from './newproject/newproject.component';


@NgModule({
  declarations: [ProjectsComponent, ViewerprojectComponent, NewprojectComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
