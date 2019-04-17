import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FilterDialogFormValues } from '../../models/FilterDialog';

@Component({
  selector: 'app-filterdialog',
  templateUrl: './filterdialog.component.html',
  styleUrls: ['./filterdialog.component.css']
})
export class FilterdialogComponent implements OnInit {

  lessThanHours = ['13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'];
  HrMinutes = ['00', '20', '40'];
  higherThanHours = ['01','02','03','04','05','06','07','08','09','10','11','12'];
  reactiveForm: FormGroup;
  filterDialogFormValues: FilterDialogFormValues;
  constructor() { }

  ngOnInit() {
      // reactive form
    this.reactiveForm = new FormGroup({
        'departureHourLessThan': new FormControl(null),
        'departureMinuteLessThan': new FormControl('00'),
        'departureHourMoreThan': new FormControl(null),
        'departureMinuteMoreThan': new FormControl('00')
      // 'tripType': new FormControl('oneWay'),
      // 'origin': new FormControl(this.RutasPop.origin, [Validators.required]),
      // 'destination': new FormControl(this.RutasPop.destination, [Validators.required]),
      // 'departureDate': new FormControl(this.departuredate, [Validators.required]),
      // 'returnDate': new FormControl({value: null, disabled: true}, [Validators.required]),
      // 'passengerCount': new FormControl(1,[Validators.required]),
      // 'promoCode': new FormControl(null)
    });
  }

  onSubmit() {
    this.filterDialogFormValues
      = new FilterDialogFormValues(
        this.reactiveForm.value.departureHourLessThan,
        this.reactiveForm.value.departureHourMoreThan,
        this.reactiveForm.value.departureMinuteLessThan,
        this.reactiveForm.value.departureMinuteMoreThan
        );

    console.log(this.reactiveForm.value);
    console.log('=====++++++/....');
    console.log(this.filterDialogFormValues);
    console.log('=====++++++/....');
    console.log(this.filterDialogFormValues.atLeastOneNotNull());
  }

}
