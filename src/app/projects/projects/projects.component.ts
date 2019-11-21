import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { environment } from '../../../environments/environment';
import { Project } from '../models/project.model';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {


  public projects: Project[];

  constructor(private projectService: ProjectsService) {
  }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }

  searchProject(value: string) {
    this.projects = this.projectService.getSearchProjects(value);
  }
}
