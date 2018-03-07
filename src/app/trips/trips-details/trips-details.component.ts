import { Component, OnInit } from '@angular/core';
import {TripsInterface} from "../../Interfaces/trips-interface";
import {TripService} from "../../shared/Trip/trip.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-trips-details',
  templateUrl: './trips-details.component.html',
  styleUrls: ['./trips-details.component.css']
})
export class TripsDetailsComponent implements OnInit {
trip: TripsInterface;
id: number;
sub: any;
  constructor(private tripService: TripService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    this.tripService.getSingleTrip(this.id).subscribe(data=>{this.trip=data;});
  }

}
