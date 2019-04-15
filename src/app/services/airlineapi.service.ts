import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rutafave } from '../models/Rutasfave';
import { PostSearchObject } from '../models/Postsearch';
import { PostResultObject } from '../models/PostResults';

@Injectable({
  providedIn: 'root'
})
export class AirlineapiService {

  constructor(private http: HttpClient) { }

  getPopularRoutes() {
    return this.http
    .get<Rutafave[]>('https://everymundointernship.herokuapp.com/popularRoutes/YL20KT86BN95');
  }

  postRequest(postSearchObject: PostSearchObject) {
    return this.http
    .post<PostResultObject[]>('https://everymundointernship.herokuapp.com/search/YL20KT86BN95', postSearchObject);
  }
}
