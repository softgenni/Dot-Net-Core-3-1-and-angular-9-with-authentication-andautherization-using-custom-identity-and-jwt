import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from '../dashboard/home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
    {
      path: "",
      component: LayoutComponent,
      children: [
        { path: 'home', component: HomeComponent },
        { path: 'security/role', loadChildren: () => import('../security/security.module').then(m=>m.SecurityModule) }
      ]  
    }
  ];
@NgModule({
  declarations: [
    HomeComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    LayoutComponent
  
  ],
  imports: [
    FormsModule,
    RouterModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  

})
export class LayoutModule { }
