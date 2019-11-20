import { Component, OnInit } from '@angular/core';

import { environment } from '../../../environments/environment';
import { Project } from '../models/project.model';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-newproject',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {

  public project: Project;

  constructor(private projectsService: ProjectsService) {
  }

  ngOnInit() {
    this.project = {
      id: 0,
      name: ''
    };
  }

  public saveProject(name: string) {
    this.projectsService.saveProject(name);
  }
}
