import { Injectable } from '@angular/core';
import{Http} from '@angular/http';
import { Headers,Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ContactServiceService {

  constructor(private http:Http) { }
  insertAPI(username:string,email:string,phone:string,message:string)
  {
    return this.http.post('http://localhost/project/public/api/contact',{
      name:username,email:email,phone:phone,message:message},
    {headers:new Headers({'X-Requested-With':'XMLHttpRequest'})});
  }

}
