import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Project } from '../models/project.model';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-viewerproject',
  templateUrl: './viewer-project.component.html',
  styleUrls: ['./viewer-project.component.css']
})
export class ViewerProjectComponent implements OnInit {

  public projectId = 0;
  public project: Project;

  constructor(private route: ActivatedRoute,
              private projectsService: ProjectsService) {
  }

  ngOnInit() {
    this.route.paramMap
      .subscribe((params: ParamMap) => {
        this.projectId = +params.get('id');
        this.project = this.projectsService.getByIdProject(this.projectId);
      });
  }

}
