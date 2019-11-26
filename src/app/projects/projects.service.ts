import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

import { Project } from './models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private projects: Project[] = [];

  private urlProjects = environment.urlBase + '/api/pub/projects';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private projectsService: ProjectsService,
              private http: HttpClient) {
  }

  public getByIdProject(id: number): Project {
    return this.projects.find(p => p._id === id);
  }

  public getSizeProjects(): Observable<any> {
    const url = this.urlProjects + '/count';
    return this.http.get<any>(url);
  }

  public getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.urlProjects);
  }

  public saveProject(name: string): Observable<Project> {
    let lastId = 0;
    this.getSizeProjects().subscribe(x => lastId = x.count);
    const newProject: Project = {
      _id: lastId + 1,
      name: name
    };

    return this.http.post<Project>(this.urlProjects, newProject, this.httpOptions);
  }

  public getSearchProjects(value: string) {
    return this.projects.filter(p =>
      p.name.toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) >= 0);
  }
}
