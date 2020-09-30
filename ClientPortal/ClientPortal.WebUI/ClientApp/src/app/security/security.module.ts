import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RolesComponent } from './roles/roles.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
const routes: Routes = [
  {
    path: "",
    component: RolesComponent,
    children: [
      { path: 'role', component: RolesComponent }
    ]
  }
];
@NgModule({
  declarations: [
    RolesComponent
  ],
  imports: [
    FormsModule,
    RouterModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
    ]
})
export class SecurityModule {
}
