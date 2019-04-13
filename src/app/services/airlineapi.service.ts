import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rutafave } from '../models/rutasfave';

@Injectable({
  providedIn: 'root'
})
export class AirlineapiService {

  constructor(private http: HttpClient) { }

  getPopularRoutes() {
    return this.http
    .get<Rutafave[]>('https://everymundointernship.herokuapp.com/popularRoutes/YL20KT86BN95');
  }
}
