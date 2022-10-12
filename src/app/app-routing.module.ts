import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CanActivateGuard } from './Guard/can-activate.guard';
import { CanLoadGuard } from './Guard/can-load.guard';
import { DeActivateGuard } from './Guard/de-activate.guard';
import { ResolveGuard } from './Guard/resolve.guard';
import { HomeComponent } from './home/home.component';
import { PackageComponent } from './package/package.component';
import { ServeComponent } from './serve/serve.component';

const routes: Routes = [
  { path : '', component:HomeComponent},
  { path : 'home', component:HomeComponent},
  { path : 'contactus', component:ContactUsComponent, canActivateChild:[CanActivateGuard],
  children:[{path : 'package', component:PackageComponent}]},
  { path : 'aboutus', component:AboutUsComponent , resolve:{userDetails:ResolveGuard} },
  { path : 'package', component:PackageComponent ,canDeactivate:[DeActivateGuard]},
  { path : 'serve', component:ServeComponent ,canActivate:[CanActivateGuard]},
  { path : 'canload', canLoad:[CanLoadGuard], loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

