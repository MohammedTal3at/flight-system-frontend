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

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //Routing
    RouterModule.forRoot([
      {
      path:"signin",component:SigninComponent,
      }
  ,{
    path:"signup",component:SignupComponent,
  }
  ]),
  ],
  providers: [AuthServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
