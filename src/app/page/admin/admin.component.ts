import { Component, OnInit } from '@angular/core';
import { PageContentService } from '../../service/page-content.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private dbService: PageContentService, private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
