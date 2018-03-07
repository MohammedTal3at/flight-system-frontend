import { Component, OnInit } from '@angular/core';
import {TripService} from "../shared/Trip/trip.service";
import {TripsInterface} from "../Interfaces/trips-interface";


@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent implements OnInit {
  trip:TripsInterface[];

  constructor(private tripService: TripService) { }

  ngOnInit() {
    this.tripService.getTrips().subscribe(data=>{this.trip=data;});
  }

  listTrips(): TripsInterface[]
  {
    return this.trip;
  }

}
