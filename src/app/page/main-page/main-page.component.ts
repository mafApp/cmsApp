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
  public pageData: any;
  public test: any;
  public sub: any;
  constructor(private dbService: PageContentService, private route: ActivatedRoute) {
    this.sub = this.route.params.subscribe(id => {
      if (id.id ) {
        const params = {table: 'pages', field: 'title' , value: id.id };
        this.dbService.getRecords(params);
      }
    });
   }

  ngOnInit() {
    this.dbService.query.subscribe(data => {
      this.pageData =  _.values(data);
    });
  } 
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
