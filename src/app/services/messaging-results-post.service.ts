import { Injectable } from '@angular/core';
import { PostResultObject, FlattenPostResultObject } from '../models/PostResults';
import { BehaviorSubject, Observable } from 'rxjs';
import { DatePipe } from '@angular/common';
import { map, filter } from 'rxjs/operators';
import { FilterDialogFormValues } from '../models/FilterDialog';

@Injectable({
  providedIn: 'root'
})
export class MessagingResultsPostService {
  private postResult: PostResultObject[];
  private bsubject = new BehaviorSubject<PostResultObject[]>([]);
  postResult$$$: Observable<PostResultObject[]> = this.bsubject.asObservable();


  private flattenPostResultObjects: FlattenPostResultObject[];
  private flatBubject = new BehaviorSubject<FlattenPostResultObject[]>([]);
  flatResults$$$: Observable<FlattenPostResultObject[]> = this.flatBubject.asObservable();

  private filterDialogData: FilterDialogFormValues;

  constructor(private datepipe: DatePipe) {
    this.postResult = [];
   }
   add( postresult: PostResultObject[]) {
      this.postResult = postresult;
      this.bsubject.next(this.postResult.slice(0));
      this.resultsFlattener();
   }

  sendFilterCriteriaToSourceOfTable( criteriaData:FilterDialogFormValues ) {
      this.filterDialogData = criteriaData;

  }
   clear() {
     this.postResult = [];
   }

   getFilteredObservable():  Observable<FlattenPostResultObject[]> {

      const filteredObservable$$$: Observable<FlattenPostResultObject[]>
      = this.flatResults$$$.pipe(


         map(flatObjX => flatObjX
          .filter( flobj => {
            if (this.filterDialogData.priceMoreThan === null) { return true;}
            else {
                return flobj.priceUSD > this.filterDialogData.priceMoreThan;
            }

          })),

         map(flatObjX => flatObjX
          .filter( flobj => {
            if (this.filterDialogData.priceLessThan === null) {return true;}
            else {
              return flobj.priceUSD < this.filterDialogData.priceLessThan;
            }
            })),

          map(flatObjX => flatObjX
            .filter(flobj => {
                if (!this.filterDialogData.getNumericalTimeLessThan()) {
                  console.log('filter data time: ' + this.filterDialogData.getNumericalTimeLessThan());
                    return true;
                } else {
                  console.log('numerical time: ' + this.toNumericalTime(flobj.departureTime));
                  const boolx = this.toNumericalTime(flobj.departureTime) < this.filterDialogData.getNumericalTimeLessThan();
                  return boolx;
                }

             })),

             map(flatObjX => flatObjX
              .filter(flobj => {
                  if (!this.filterDialogData.getNumericalTimeMoreThan()) {
                    console.log('filter data time: ' + this.filterDialogData.getNumericalTimeMoreThan());
                      return true;
                  } else {
                    console.log('numerical time: ' + this.toNumericalTime(flobj.departureTime));
                    const boolx = this.toNumericalTime(flobj.departureTime) > this.filterDialogData.getNumericalTimeMoreThan();
                    return boolx;
                  }

               }))


        );

      return filteredObservable$$$;
   }
  private toNumericalTime(time: string) {

    const timex = time.split(':').join('');
    return Number(timex);
  }


    // flatten mean for each route create a row (similar to DB denormalization)
   private resultsFlattener() {
     // initialize array
     this.flattenPostResultObjects = new Array<FlattenPostResultObject>();


     if (this.postResult.length > 0) {

       this.postResult.forEach(resEle => {

         if (resEle.routes.length > 0) {
             resEle.routes.forEach(routEle => {
               let retDate: string;
             if (resEle.departureDate === undefined ) {
               retDate = 'TBD';
             } else {
               const tDate = resEle.departureDate;
               retDate = this.datepipe.transform(tDate, 'MMM d, y');
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

     this.flatBubject.next(this.flattenPostResultObjects.slice(0));
   }
}
