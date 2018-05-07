import { Injectable } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { Subject } from 'rxjs/Subject';
import * as _ from 'lodash';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Injectable()
export class PageContentService {
  public pages: any;
  public test: any;
  public page: any;
  public pageContent: any;
  private resultTest: any;
  constructor(private db: AngularFireDatabase) {
    this.pages = this.db.list('/page').valueChanges();
   }
   public getPage(params: any) {
   const page = this.db.list('/' + params.page,
         ref => ref.orderByChild(params.field)
         .equalTo(params.value)).valueChanges();
   return page;
  }
  public getContent(params: any) {
   const content = this.db.list('/content',
         ref => ref.orderByChild(params.field)
         .equalTo(params.value)).valueChanges();
   return content;
  }
   public getGalery(params: any) {
   const galery = this.db.list('/content',
         ref => ref.orderByChild(params.field)
         .equalTo(params.value)).valueChanges();
   return galery;
  }
  public getImage(params: any) {
   const image = this.db.list('/content',
         ref => ref.orderByChild(params.field)
         .equalTo(params.value)).valueChanges();
   return image;
  }
}
