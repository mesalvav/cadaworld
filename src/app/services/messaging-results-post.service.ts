import { Injectable } from '@angular/core';
import { PostResultObject } from '../models/PostResults';

@Injectable({
  providedIn: 'root'
})
export class MessagingResultsPostService {

  postResult: PostResultObject[];

  constructor() {
    this.postResult = [];
   }
   add( postresult: PostResultObject[]) {
      this.postResult = postresult;
   }
   clear() {
     this.postResult = [];
   }
}
