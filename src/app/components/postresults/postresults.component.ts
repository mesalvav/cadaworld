import { Component, OnInit, Inject } from '@angular/core';
import { MessagingResultsPostService } from '../../services/messaging-results-post.service';
import { FlattenPostResultObject } from '../../models/PostResults';

import { Observable } from 'rxjs';
import {MatDialog, MatDialogConfig} from '@angular/material';
import { FilterdialogComponent } from '../filterdialog/filterdialog.component';


@Component({
  selector: 'app-postresults',
  templateUrl: './postresults.component.html',
  styleUrls: ['./postresults.component.css']
})
export class PostresultsComponent implements OnInit {

  displayedColumns
        = ['origin', 'departureDate', 'departureTime', 'arrivalTime', 'priceUSD'];

  flatDataSource$$$: Observable<FlattenPostResultObject[]>;


  constructor(
    private messagingResultsPostService: MessagingResultsPostService,
    public dialog: MatDialog

    ) { }

  ngOnInit() {
    // flatten mean for each route create a row (similar to DB denormalization)
    this.flatDataSource$$$
      = this.messagingResultsPostService.flatResults$$$;

  }


  openFilterDialog() {

    const dialogConfig = new MatDialogConfig();

    const dialogRef = this.dialog.open(FilterdialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      this.flatDataSource$$$
        = this.messagingResultsPostService.getFilteredObservable();
    });
   }

   resetFilter() {
      this.flatDataSource$$$
        = this.messagingResultsPostService.flatResults$$$;
   }




}
