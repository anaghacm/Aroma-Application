import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { GetintouchComponent } from './getintouch/getintouch.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PerfumesComponent } from './perfumes/perfumes.component';
import { RegisterComponent } from './register/register.component';
import { ShippingComponent } from './shipping/shipping.component';
import { TermsComponent } from './terms/terms.component';

const routes: Routes = [
  {
    path:'', component:HomeComponent
  },
  {
    path:'about', component:AboutComponent
  },
  {
    path:'contact', component:GetintouchComponent
  },
  {
    path:'shipping', component:ShippingComponent
  },
  {
    path:'terms', component:TermsComponent
  },
  {
    path:'login', component:LoginComponent
  },
  {
    path:'register', component:RegisterComponent
  },
  {
    path:'forgotpassword', component:ForgotpasswordComponent
  },
  {
    path:'perfumes', component:PerfumesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
