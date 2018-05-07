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
  public pageContent: any;
  public pageData: any;
  public pageImages: any;
  public subPages: any;
  constructor(private dbService: PageContentService, private route: ActivatedRoute) { }
  ngOnInit() {
    this.sub = this.route.params.subscribe(id => {
      this.getPage({page: 'page', field: 'id' , value: id.id });
      this.getContent({page: 'content', field: 'page_id' , value: id.id });
      this.getSubPages({page: 'sub_pages', field: 'page_id' , value: id.id });
    });
  }
  private getContent(params) {
    const getData = this.dbService.getPage(params);
    getData.subscribe(data => {
     this.pageContent = data;
    });
  }
  private getPage(params) {
      const getData = this.dbService.getPage(params);
      getData.subscribe(data => {
       this.pageData = data;
      });
  }
  private getSubPages(params) {
    const getData = this.dbService.getPage(params);
    getData.subscribe(data => {
     this.subPages = data;
     _.forEach(data, subPage => {
       const img = this.getImages({page: 'images', field: 'img_id' , value: subPage.img });
       img.subscribe(img_data => {
        this.subPages.images = img_data;
       });
     });
    });
}
private getImages(params) {
  const getData = this.dbService.getPage(params);
  getData.subscribe(data => {
  return data;
  });
 return getData;
}
}
