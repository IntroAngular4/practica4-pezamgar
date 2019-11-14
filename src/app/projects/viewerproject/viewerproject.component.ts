import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-viewerproject',
  templateUrl: './viewerproject.component.html',
  styleUrls: ['./viewerproject.component.css']
})
export class ViewerprojectComponent implements OnInit {

  public projectId = '';

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap
      .subscribe((params: ParamMap) => {
        this.projectId = params.get('id');
      });
  }

}
