import { Component, OnInit } from '@angular/core';
import { MessagingResultsPostService } from '../../services/messaging-results-post.service';
import { PostResultObject, FlattenPostResultObject, RoutesObject } from '../../models/PostResults';

import { DatePipe } from '@angular/common';
import { Observable } from 'rxjs';

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
    ) { }

  ngOnInit() {
    this.flatDataSource$$$ = this.messagingResultsPostService.flatResults$$$;

  }
  // flatten mean for each route create a row (similar to DB denormalization)



}
