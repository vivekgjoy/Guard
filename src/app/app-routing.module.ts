import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CanActivateGuard } from './Guard/can-activate.guard';
import { DeActivateGuard } from './Guard/de-activate.guard';
import { HomeComponent } from './home/home.component';
import { PackageComponent } from './package/package.component';
import { ServeComponent } from './serve/serve.component';

const routes: Routes = [
  { path : '', component:HomeComponent},
  { path : 'home', component:HomeComponent},
  { path : 'contactus', component:ContactUsComponent},
  { path : 'aboutus', component:AboutUsComponent},
  { path : 'package', component:PackageComponent ,canDeactivate:[DeActivateGuard]},
  { path : 'serve', component:ServeComponent ,canActivate:[CanActivateGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

