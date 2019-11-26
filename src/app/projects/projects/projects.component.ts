import { Component, OnInit } from '@angular/core';

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
    this.projectService.getProjects().subscribe(x => this.projects = x);
  }

  searchProject(value: string) {
    this.projects = this.projectService.getSearchProjects(value);
  }
}
