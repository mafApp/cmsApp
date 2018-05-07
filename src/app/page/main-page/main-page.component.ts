import { Component, OnInit } from '@angular/core';
import { PageContentService } from '../../service/page-content.service';
import * as _ from 'lodash';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  public content: any;
  public pageData: any;
  constructor(private dbService: PageContentService, private route: ActivatedRoute) {
   }
  ngOnInit() {
    this.dbService.pages.subscribe(data => {
     _.forEach(data, page => {
      const params = {table: 'pages', field: 'page_id' , value: page.id };
      const content = this.dbService.getContent(params);
      content.subscribe( contentData => {
        if ( contentData.length) {
          page.content = _.values(contentData);
        }
        this.pageData =  _.values(page);
        console.log(this.pageData);
      });
     });
    });
  }
}
