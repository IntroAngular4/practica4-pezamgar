import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  public projects: Project[];

  constructor() {
  }

  ngOnInit() {
    this.projects = environment.projects;
  }

}
