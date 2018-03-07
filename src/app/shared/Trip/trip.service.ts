import { Injectable } from '@angular/core';
import { Response } from '@angular/http/src/static_response';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

import { Observable } from 'rxjs/Observable';
import {TripsInterface} from "../../Interfaces/trips-interface";

@Injectable()
export class TripService {

  constructor(private http:Http) { }
  getTrips(): Observable <TripsInterface[]>
  {
    return this.http.get('http://localhost/project/public/api/client/trips')
       .map(res => { return <TripsInterface[]>res.json().trips});
  }

  getSingleTrip(id: number): Observable <TripsInterface> {
    return this.http.get('http://localhost/project/public/api/client/trips/'+ id)
        .map(res => { return <TripsInterface>res.json().trip});
}

}
