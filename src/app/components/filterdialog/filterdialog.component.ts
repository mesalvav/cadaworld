import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FilterDialogFormValues } from '../../models/FilterDialog';
import { MessagingResultsPostService } from '../../services/messaging-results-post.service';

@Component({
  selector: 'app-filterdialog',
  templateUrl: './filterdialog.component.html',
  styleUrls: ['./filterdialog.component.css']
})
export class FilterdialogComponent implements OnInit {

  hoursOfDay = ['01','02','03','04','05','06','07','08','09','10','11','12',
                '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'];
  HrMinutes = ['00', '20', '40'];
  lessThanHours;
  higherThanHours;

  reactiveForm: FormGroup;
  filterDialogFormValues: FilterDialogFormValues;

  selectedDepartureHourLessThan = 'null';

  constructor(private messagingResultsPostService: MessagingResultsPostService, ) { }

  ngOnInit() {
    this.lessThanHours = this.hoursOfDay.slice(0);
    this.higherThanHours = this.hoursOfDay.slice(0);
      // reactive form
    this.reactiveForm = new FormGroup({
        'departureHourLessThan': new FormControl(null),
        'departureMinuteLessThan': new FormControl('00'),
        'departureHourMoreThan': new FormControl(null),
        'departureMinuteMoreThan': new FormControl('00'),
        'priceLessThanControl': new FormControl(null,[ Validators.min(-1)]),
        'priceMoreThanControl': new FormControl(null, [Validators.min(-1)])

    });

    this.subscribeToSomeFormControls();
  }

  private subscribeToSomeFormControls() {

    this.reactiveForm.get('departureHourLessThan').valueChanges.subscribe( (valueC: string) => {
      console.log('departureHourLessThan = ' + valueC );
      function isEqual(element) {
        return valueC === element;
      }
      const indes = this.hoursOfDay.findIndex(isEqual);
      this.higherThanHours = this.hoursOfDay.slice(0, indes);
    });

    this.reactiveForm.get('departureHourMoreThan').valueChanges.subscribe( valueC => {
      console.log('departureHourMoreThan = ' + valueC );
      function isEqual(element) {
        return valueC === element;
      }
      const indes = this.hoursOfDay.findIndex(isEqual);
      this.lessThanHours = this.hoursOfDay.slice(indes, this.hoursOfDay.length);
    });
/* refine price filtering
    this.reactiveForm.get('priceLessThanControl').valueChanges.subscribe(valueL => {
        const valueh = this.reactiveForm.get('priceMoreThanControl').value;

    });

    this.reactiveForm.get('priceMoreThanControl').valueChanges.subscribe(valueH => {
      const valuel = this.reactiveForm.get('priceLessThanControl').value;

    });
*/
  }

  onSubmit() {
    this.filterDialogFormValues
      = new FilterDialogFormValues(
        this.reactiveForm.value.departureHourLessThan,
        this.reactiveForm.value.departureHourMoreThan,
        this.reactiveForm.value.departureMinuteLessThan,
        this.reactiveForm.value.departureMinuteMoreThan,
        this.reactiveForm.value.priceLessThanControl,
        this.reactiveForm.value.priceMoreThanControl
        );

    console.log(this.reactiveForm.value);
    console.log(this.filterDialogFormValues);
    console.log('=====++++++/....');

    this.messagingResultsPostService
      .sendFilterCriteriaToSourceOfTable(this.filterDialogFormValues);

  }

}
