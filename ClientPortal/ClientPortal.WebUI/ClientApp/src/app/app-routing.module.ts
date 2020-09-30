import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './_helpers/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/app/dashboard/home', pathMatch: 'full' },
  { path: 'app', redirectTo: '/app/dashboard/home', pathMatch: 'full' },
  { path: 'app/dashboard', redirectTo: '/app/dashboard/home', pathMatch: 'full' },
  {
    path: 'app/dashboard',
    loadChildren: () => import('./shared/layout.module').then(m => m.LayoutModule)
    , canActivate: [AuthGuard]
  },
  { path: 'login', component: LoginComponent }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
