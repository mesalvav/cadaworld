import { Component, OnInit } from '@angular/core';
import { MessagingResultsPostService } from '../../services/messaging-results-post.service';
import { PostResultObject, FlattenPostResultObject, RoutesObject } from '../../models/PostResults';

import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-postresults',
  templateUrl: './postresults.component.html',
  styleUrls: ['./postresults.component.css']
})
export class PostresultsComponent implements OnInit {
  postResults: PostResultObject[];
  flattenPostResultObjects: FlattenPostResultObject[];
  displayedColumns
        = ['origin','departureDate', 'departureTime', 'arrivalTime', 'priceUSD'];
  dataSource;

  constructor(
    private messagingResultsPostService: MessagingResultsPostService,
    public datepipe: DatePipe
    ) { }

  ngOnInit() {
    this.flattenPostResultObjects = new Array<FlattenPostResultObject>();

    this.postResults = this.messagingResultsPostService.postResult;
    this.resultsFlattener();
    console.log(this.postResults);
    console.log('++++++==++++++');
    console.log(this.flattenPostResultObjects);
    this.dataSource = this.flattenPostResultObjects;
  }
  // flatten mean for each route create a row or equivalent to denormalization
  resultsFlattener() {

    if (this.postResults.length > 0) {

      this.postResults.forEach(resEle => {

        if (resEle.routes.length > 0) {
            resEle.routes.forEach(routEle => {
              let retDate: string;
            if (resEle.departureDate === undefined ) {
              retDate = 'TBD';
            } else {
              const tDate = resEle.departureDate;
              retDate = this.datepipe.transform(tDate, 'dd-MMM-yy');
            }
              const tempFlatObject =
                        new FlattenPostResultObject(
                          resEle.destination,
                          resEle.origin,
                          resEle.tripType,
                          resEle.fareClass,
                          retDate
                          );

                tempFlatObject.routes = resEle.routes;
                tempFlatObject.arrivalTime = routEle.arrivalTime;
                tempFlatObject.departureTime = routEle.departureTime;
                tempFlatObject.priceUSD = routEle.priceUSD;

                  this.flattenPostResultObjects.push(tempFlatObject);
            });
        }
      });
    }

  }


}
