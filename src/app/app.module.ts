import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { MainPageComponent } from './page/main-page/main-page.component';
import { PageContentService } from './service/page-content.service';
import { RouterModule, Routes } from '@angular/router';
import 'materialize-css';
import { MaterializeModule } from 'angular2-materialize';
import { SubPageComponent } from './page/sub-page/sub-page.component';
import { SidemenuComponent } from './elements/sidemenu/sidemenu.component';
import { FooterComponent } from './elements/footer/footer.component';
import { AdminComponent } from './page/admin/admin.component';
import { AdminListComponent } from './elements/admin-list/admin-list.component';
import { AdminFormComponent } from './elements/admin-form/admin-form.component';
import { AdminDataService } from './service/admin-data.service';
export const firebaseConfig = {
  apiKey: 'AIzaSyB6mvQ5Dikx-sS-m-I4Pm4OMhfAjdJyKBU',
  authDomain: 'cmsapp-e525d.firebaseapp.com',
  databaseURL: 'https://cmsapp-e525d.firebaseio.com',
  projectId: 'cmsapp-e525d',
  storageBucket: '',
  messagingSenderId: '73515320125'
};
const appRoutes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'page/:id', component: SubPageComponent },
  { path: 'admin/:model/:id', component: AdminComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    SubPageComponent,
    SidemenuComponent,
    FooterComponent,
    AdminComponent,
    AdminListComponent,
    AdminFormComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireModule,
    AngularFireDatabaseModule,
  ],
  providers: [PageContentService, AdminDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
