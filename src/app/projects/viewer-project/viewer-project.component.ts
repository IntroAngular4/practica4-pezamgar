import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Project } from '../models/project.model';
import { ProjectsService } from '../projects.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-viewerproject',
  templateUrl: './viewer-project.component.html',
  styleUrls: ['./viewer-project.component.css']
})
export class ViewerProjectComponent implements OnInit {

  public project: Project;

  constructor(private route: ActivatedRoute,
              private projectsService: ProjectsService) {
  }

  ngOnInit() {
    this.route.paramMap
      .subscribe((params: ParamMap) => {
        const projectId = +params.get('id');
        this.projectsService.getByIdProject(projectId)
          .pipe(
            tap(x => console.log(x))
          )
          .subscribe(x => {
            this.project = x;
          });
      });
  }

}
