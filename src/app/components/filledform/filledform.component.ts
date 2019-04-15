import { Component, OnInit } from '@angular/core';
import { MessagingrutaService } from '../../services/messagingruta.service';
import { Rutafave } from '../../models/Rutasfave';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { AirlineapiService } from '../../services/airlineapi.service';
import { PostSearchObject } from '../../models/Postsearch';

import {MatDatepickerInputEvent} from '@angular/material/datepicker';

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

  departuredate;

  // @Output() change: EventEmitter<MatRadioChange>;
  reactiveForm: FormGroup;

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

    this.departuredate = new Date(this.RutasPop.departureDate);
    this.minReturnDate = new Date(this.RutasPop.departureDate);

    // reactive form
    this.reactiveForm = new FormGroup({
      'tripType': new FormControl('oneWay'),
      'origin': new FormControl(this.RutasPop.origin, [Validators.required]),
      'destination': new FormControl(this.RutasPop.destination, [Validators.required]),
      'departureDate': new FormControl(this.departuredate, [Validators.required]),
      'returnDate': new FormControl({value: null, disabled: true}),
      'passengerCount': new FormControl(1,[Validators.required]),
      'promoCode': new FormControl(null)
    });

  }

  // when departure date changes return date should be older than departure date
  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    console.log(`${type}: ${event.value}`);
    this.minReturnDate = new Date(event.value);
    console.log(this.minReturnDate);
  }
  // when radio button change oneWay or roundTrip
  radioChanged(event) {
    console.log(event.value);
    if (event.value === 'roundTrip') {
      this.reactiveForm.get('returnDate').enable();
    } else {
      this.reactiveForm.get('returnDate').disable();
    }
  }

  onSubmit(form: NgForm) {
       console.log(this.reactiveForm);

      const postobject =
      new PostSearchObject(
        this.reactiveForm.value.destination,
        this.reactiveForm.value.origin,
        this.reactiveForm.value.departureDate,
        this.reactiveForm.value.passengerCount,
        this.reactiveForm.value.returnDate,
        this.reactiveForm.value.promoCode
        );

        this.airlineapiService.postRequest(postobject).subscribe(data =>{
          console.log(data);

        });
  }
}
