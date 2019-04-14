import { Injectable } from '@angular/core';
import { Rutafave } from '../models/Rutasfave';

@Injectable({
  providedIn: 'root'
})
export class MessagingrutaService {
  rutamesage: Rutafave;

  constructor() {
    this.rutamesage =
      new Rutafave('', '', '', '', '', '', '');
   }

  add( rutax: Rutafave){
    this.rutamesage = rutax;
  }
  clear() {
    this.rutamesage =
      new Rutafave('', '', '', '', '', '', '');
  }
}
