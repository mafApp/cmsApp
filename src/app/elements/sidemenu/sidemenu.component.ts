import { Component, OnInit } from '@angular/core';
import { PageContentService } from '../../service/page-content.service';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {
  pageData: any;
  constructor(private dbService: PageContentService,  private route: ActivatedRoute) { }

  ngOnInit() {
    this.dbService.pages.subscribe(data => {
      this.pageData =  _.values(data);
    });
  }

}
