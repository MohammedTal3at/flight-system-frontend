import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

//Authservice-->put it in the providers
import { AuthServiceService } from './shared/Auth/auth-service.service';
//Http
//put it in the imports
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

//Routing
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

import { ProfileComponent } from './profile/profile.component';
////bootstrap
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TripsComponent } from './trips/trips.component';



@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
  
    ProfileComponent,
  
    TripsComponent,
  

    
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule,
    HttpModule,
    //Routing
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forRoot([
      {
       path:"profile",component :  ProfileComponent,
      },
      {
        path:"contact-us",component:ContactUsComponent,
      },
      {
        path:"trips",component:TripsComponent,
      },
      {
      path:"signin",component:SigninComponent,
      },
      {
      path:"about-us", component: AboutUsComponent
      }
     ,{
    path:"signup",component:SignupComponent,
  },
  {
    path:'**', component: HomeComponent
  },  
  ]),
  ],
  providers: [AuthServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
