import { Component, OnInit } from '@angular/core';

import { environment } from '../../../environments/environment';
import { ProjectsService } from '../../projects/projects.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public numProjects: number;

  constructor(private projectsService: ProjectsService) {
  }

  ngOnInit() {
    this.projectsService.getSizeProjects()
      .pipe(
        tap(x => console.log(x.count))
      ).subscribe(
      x => this.numProjects = x.count
    );
  }

}
