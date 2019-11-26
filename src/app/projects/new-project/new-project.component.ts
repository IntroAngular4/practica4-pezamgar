import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Project } from '../models/project.model';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-newproject',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {

  public project: Project;

  constructor(private projectsService: ProjectsService,
              private router: Router) {
  }

  ngOnInit() {
    this.project = {
      _id: 0,
      name: ''
    };
  }

  public saveProject(name: string) {
    this.projectsService.saveProject(name)
      .subscribe(
        () => this.gotoProjects()
      );
  }

  private gotoProjects() {
    this.router.navigate(['/projects'])
      .then(() => {
        window.location.reload();
      });
  }
}
