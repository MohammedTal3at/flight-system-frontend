import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactServiceService } from '../shared/Contact/contact-service.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
flage:boolean=false;
  constructor(private contactService:ContactServiceService) { }

  ngOnInit() {
  }

  //from the form
  onInsertData(form: NgForm)
  {
    this.contactService.insertAPI(form.value.username,form.value.email,form.value.phone,form.value.message)
    .subscribe(
      data=>{console.log(data),
      this.flage=true;
      },
      error=>console.log(error)
    );
  }
}
