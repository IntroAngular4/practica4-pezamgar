import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

import { Project } from './models/project.model';
import { tap } from 'rxjs/operators';

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

  public getByIdProject(id: number): Observable<Project> {
    const url = this.urlProjects + `/${id}`;
    return this.http.get<Project>(url);
  }

  public getSizeProjects(): Observable<any> {
    const url = this.urlProjects + '/count';
    return this.http.get<any>(url);
  }

  public getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.urlProjects)
      .pipe(
        tap(x => console.log(x))
      );
  }

  public saveProject(name: string): Observable<Project> {
    const newProject = {
      name: name
    };
    return this.http.post<Project>(this.urlProjects, newProject, this.httpOptions);
  }

  public getSearchProjects(value: string) {
    return this.projects.filter(p =>
      p.name.toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) >= 0);
  }
}
