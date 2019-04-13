import { Component, OnInit } from '@angular/core';
import { AirlineapiService } from '../../services/airlineapi.service';
import { Rutafave } from '../../models/Rutasfave';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {
  RutasPop: Rutafave[];

  constructor(private apiservice: AirlineapiService) { }

  ngOnInit() {
    this.apiservice.getPopularRoutes()
    .subscribe(data => {
      this.RutasPop = data;
      console.log(data);
    });
  }


}
