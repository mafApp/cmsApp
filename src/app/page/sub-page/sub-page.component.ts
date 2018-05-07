import { Component, OnInit } from '@angular/core';
import { PageContentService } from '../../service/page-content.service';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-sub-page',
  templateUrl: './sub-page.component.html',
  styleUrls: ['./sub-page.component.css']
})
export class SubPageComponent implements OnInit {
  public sub: any;
  public pageData: any;
  constructor(private dbService: PageContentService, private route: ActivatedRoute) { 
    this.sub = this.route.params.subscribe(id => {
      const params = {table: 'pages', field: 'title' , value: id.id };
      this.dbService.getRecords(params);
      const getData =  this.dbService.query.subscribe(data => {
        this.pageData = data[0];
      });
    });
  }

  ngOnInit() {

  }

}
