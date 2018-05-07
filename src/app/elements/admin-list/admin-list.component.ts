import { Component, OnInit } from '@angular/core';
import { AdminDataService } from '../../service/admin-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {
public list: any;
  constructor(private adminService: AdminDataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(id => {
    const params = {page: id.model};
    this.adminService.getListData(params).subscribe(data => {
      this.list = data;
    });
  });
  }
}
