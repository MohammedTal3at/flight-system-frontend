
import { Component, OnInit ,EventEmitter,Output} from '@angular/core';
import {Router} from '@angular/router';

/*import two libraries 
1- for get the data from the Form
2-for import The AuthService
*/

import { NgForm } from '@angular/forms';
import { AuthServiceService } from '../shared/Auth/auth-service.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
//object private of AuthService
logindone:boolean;
  constructor(private authService:AuthServiceService,private router: Router) { }

  ngOnInit() {
  }

  //Here for signin the client in the front-end
  onSignin(form: NgForm)
  {
    this.authService.signin(form.value.email,form.value.password)
    .subscribe(
      //for get the token 
      tokenData=>{console.log(tokenData),this.logindone=true;},
      error=>{console.log(error),this.logindone=false;}
    );
    
    //to go to profile 
    this.router.navigate(["profile"]);
    
  }

}

