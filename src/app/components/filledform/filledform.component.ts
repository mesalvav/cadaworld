import { Component, OnInit } from '@angular/core';
import { MessagingrutaService } from '../../services/messagingruta.service';
import { Rutafave } from '../../models/Rutasfave';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-filledform',
  templateUrl: './filledform.component.html',
  styleUrls: ['./filledform.component.css']
})
export class FilledformComponent implements OnInit {
  RutasPop: Rutafave;
  minReturnDate;
  minDepartDate;
  passengers = [1,2,3,4,5,6,7,8,9,10];
  triptype = "one";

  NOpassengers = 1;
  theorigin;
  thedestination;
  departuredate;

  constructor(
    private messagingService: MessagingrutaService
  ) { }

  ngOnInit() {
    this.RutasPop = this.messagingService.rutamesage;
    console
    .log('MYDEPARTURE....' + typeof(this.RutasPop.departureDate)
    + ' >>>>> ' + this.RutasPop.departureDate);

    this.minDepartDate = new Date();
    this.minReturnDate = new Date();

    this.theorigin = this.RutasPop.origin;
    this.thedestination = this.RutasPop.destination;

    this.departuredate = new Date(this.RutasPop.departureDate);
    this.minReturnDate = new Date(this.RutasPop.departureDate);
  }

  onSubmit(form: NgForm) {
      console.log(form);
  }
}
