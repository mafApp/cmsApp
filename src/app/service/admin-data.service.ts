import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class AdminDataService {

  constructor(private db: AngularFireDatabase) { }
  public getData(params: any) {
    const page = this.db.list('/' + params.page,
          ref => ref.orderByChild(params.field)
          .equalTo(params.value)).valueChanges();
    return page;
   }
   public getListData(params) {
    const data = this.db.list('/' + params.page).valueChanges();
    return data;
   }
}
