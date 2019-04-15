import { Component, OnInit } from '@angular/core';
import { MessagingResultsPostService } from '../../services/messaging-results-post.service';
import { PostResultObject } from '../../models/PostResults';


@Component({
  selector: 'app-postresults',
  templateUrl: './postresults.component.html',
  styleUrls: ['./postresults.component.css']
})
export class PostresultsComponent implements OnInit {
  postResults: PostResultObject[];
  constructor(
    private messagingResultsPostService: MessagingResultsPostService,

    ) { }

  ngOnInit() {

    this.postResults = this.messagingResultsPostService.postResult;
    console.log(this.postResults);
  }


}
