import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NewProjectComponent } from './new-project/new-project.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { ViewerProjectFormComponent } from './viewer-project/viewer-project-form/viewer-project-form.component';
import { ViewerProjectComponent } from './viewer-project/viewer-project.component';


@NgModule({
  declarations: [
    ProjectsComponent,
    ViewerProjectComponent,
    NewProjectComponent,
    ProjectsListComponent,
    ViewerProjectFormComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    FormsModule
  ]
})
export class ProjectsModule {
}
