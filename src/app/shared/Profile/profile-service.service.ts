import { Injectable } from '@angular/core';
import { Response } from '@angular/http/src/static_response';
import{Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

import { Observable } from 'rxjs/Observable';
import { AuthServiceService } from '../Auth/auth-service.service';
import { ProfileInterface } from '../../Interfaces/profile-interface';

@Injectable()
export class ProfileServiceService {

  constructor(private http:Http,private authService:AuthServiceService) { }
  getUser():Observable<ProfileInterface>
  {
    const token=this.authService.getToken();
    return this.http.get('http://localhost/project/public/api/userdata?token='+token)
    .map(res => res.json());
  }

}
