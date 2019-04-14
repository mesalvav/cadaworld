import { Component, OnInit } from '@angular/core';
import { AirlineapiService } from '../../services/airlineapi.service';
import { Rutafave } from '../../models/Rutasfave';
import { Router } from '@angular/router';
import { MessagingrutaService } from '../../services/messagingruta.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {
  RutasPop: Rutafave[];

  constructor(
    private apiservice: AirlineapiService,
    private router: Router,
    private messagingService: MessagingrutaService
    ) { }

  ngOnInit() {
    this.apiservice.getPopularRoutes()
    .subscribe(data => {

      this.RutasPop = data;
      this.RutasPop.forEach(ele => {

        ele.price = 75;
      });
      console.log(data);
    });
  }

  filledAform(ruta: Rutafave) {
    this.messagingService.add(ruta);
    this.router.navigate(['filledform']);
  }
}
