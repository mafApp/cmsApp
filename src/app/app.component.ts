import { Component } from '@angular/core';
import { PageContentService } from './service/page-content.service';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageData: any;
  constructor(private dbService: PageContentService, private route: ActivatedRoute) {
    this.dbService.pages.subscribe(data => {
      this.pageData =  _.values(data);
    });
  }
}
