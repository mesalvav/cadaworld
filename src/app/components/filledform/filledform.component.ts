import { Component, OnInit } from '@angular/core';
import { MessagingrutaService } from '../../services/messagingruta.service';
import { Rutafave } from '../../models/Rutasfave';
import { NgForm } from '@angular/forms';
import { AirlineapiService } from '../../services/airlineapi.service';
import { PostSearchObject } from '../../models/Postsearch';

@Component({
  selector: 'app-filledform',
  templateUrl: './filledform.component.html',
  styleUrls: ['./filledform.component.css']
})
export class FilledformComponent implements OnInit {
  RutasPop: Rutafave;
  minReturnDate;
  minDepartDate;
  passengers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  tripType = 'oneWay';

  NOpassengers = 1;
  theorigin;
  thedestination;
  departuredate;

  // @Output() change: EventEmitter<MatRadioChange>;

  constructor(
    private messagingService: MessagingrutaService,
    private airlineapiService: AirlineapiService
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
      // console.log(form.value);

      const postobject =
      new PostSearchObject(
        form.value.destination,
        form.value.origin,
        form.value.departureDate,
        form.value.passengerCount,
        form.value.returnDate,
        form.value.promoCode
        );

        this.airlineapiService.postRequest(postobject).subscribe(data =>{
          console.log(data);
        });
  }
}
