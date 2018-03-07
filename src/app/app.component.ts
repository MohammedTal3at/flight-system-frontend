import { Component } from '@angular/core';
import { AuthServiceService } from './shared/Auth/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  //isUserLoggedIn:Boolean=false;
  constructor(private router:Router,private authservice:AuthServiceService){}

  isUserLoggedIn()
  {
    if(this.authservice.IsLoggedIn==true)
    {
      return true;
    }
    else{
      return false;
    }
  }
  logoutClicked()
  {
    this.authservice.getUserLogout();
    this.router.navigate(['']);
    return false;
  }
}
