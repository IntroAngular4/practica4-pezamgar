import { Injectable } from '@angular/core';

import { Project } from './models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private projects: Project[] = [
    { id: 0, name: 'Learn Angular' },
    { id: 1, name: 'Develop My Dream app' },
    { id: 2, name: 'Travel around the world' },
    { id: 3, name: 'Clean my room' }
  ];

  constructor(private projectsService: ProjectsService) {
  }

  public getByIdProject(id: number): Project {
    return this.projects.find(p => p.id === id);
  }

  public getSizeProjects(): number {
    return this.projects.length;
  }

  public getProjects(): Project[] {
    return this.projects;
  }

  public saveProject(name: string) {
    const lastId = this.projects.length;
    this.projects.push({
      id: lastId + 1,
      name: name
    });
  }

  public getSearchProjects(value: string) {
    return this.projects.filter(p =>
      p.name.toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) >= 0);
  }
}
