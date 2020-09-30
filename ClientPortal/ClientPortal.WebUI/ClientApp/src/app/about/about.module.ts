import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AboutComponent } from '../about/about.component';

const routes: Routes = [
    {
      path: "",
      component: AboutComponent
    }
  ];
@NgModule({
  declarations: [
  
   AboutComponent
  
  ],
  imports: [
 
    HttpClientModule,
    FormsModule,
    RouterModule,
  
    NgbModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  

})
export class AboutModule { }
