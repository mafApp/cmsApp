import { Injectable } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class PageContentService {
  public pages = new Subject();
  public selectedPage =  new Subject();
  public query: any;
  constructor(private db: AngularFireDatabase) {
    this.query = this.db.list('/pages').valueChanges();
   }
   public getRecords(params: any) {
     console.log(params.table);
    this.query = this.db.list('/pages',
          ref => ref.orderByChild(params.field)
          .equalTo(params.value))
    .valueChanges();
   }
}
