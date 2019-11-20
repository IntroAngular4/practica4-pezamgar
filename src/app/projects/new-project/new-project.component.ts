import { Component, OnInit } from '@angular/core';

import { environment } from '../../../environments/environment';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-newproject',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {

  public project: Project;

  constructor() {
  }

  ngOnInit() {
    this.project = {
      id: 0,
      name: ''
    };
  }

  public saveProject(name: string) {
    const lastId = environment.projects.length;
    environment.projects.push({
      id: lastId + 1,
      name: name
    });
  }
}
