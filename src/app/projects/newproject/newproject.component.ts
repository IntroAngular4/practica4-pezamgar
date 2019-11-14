import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-newproject',
  templateUrl: './newproject.component.html',
  styleUrls: ['./newproject.component.css']
})
export class NewprojectComponent implements OnInit {

  public project: Project;

  constructor() {
  }

  ngOnInit() {
    this.project = {
      id: 0,
      name: ''
    };
  }

  public saveContact() {
    const lastId = environment.projects.length;
    environment.projects.push({
      id: lastId + 1,
      name: this.project.name
    });
  }
}
