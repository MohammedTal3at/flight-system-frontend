
import { Component, OnInit,Input ,Output} from '@angular/core';
import { ProfileServiceService } from '../shared/Profile/profile-service.service';
import { ProfileInterface } from '../Interfaces/profile-interface';
import { AuthServiceService } from '../shared/Auth/auth-service.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  //interface of profile
  user:ProfileInterface;
  constructor(private profileService:ProfileServiceService,private authservice:AuthServiceService) {
  
}

  ngOnInit() {
    this.profileService.getUser().subscribe(data=>{this.user=data;console.log(this.user)});
  }
  
 /* getUserData()
  {
    
    this.profileService.getUser()
    .subscribe(
      data=>{this.user=data;
        console.log(this.user);}
    );
    
  }*/
  //get the user data is login 
  listUsersFromAPI():ProfileInterface
  {
    return this.user;
  }
  
}

