import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { NewprojectComponent } from './newproject/newproject.component';
import { ViewerprojectComponent } from './viewerproject/viewerproject.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
    children: [
      {
        path: 'new',
        component: NewprojectComponent
      },
      {
        path: 'project/:id',
        component: ViewerprojectComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule {
}
