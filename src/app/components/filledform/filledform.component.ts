import { Component, OnInit } from '@angular/core';
import { MessagingrutaService } from '../../services/messagingruta.service';
import { Rutafave } from '../../models/Rutasfave';

@Component({
  selector: 'app-filledform',
  templateUrl: './filledform.component.html',
  styleUrls: ['./filledform.component.css']
})
export class FilledformComponent implements OnInit {
  RutasPop: Rutafave;
  constructor(
    private messagingService: MessagingrutaService
  ) { }

  ngOnInit() {
    this.RutasPop = this.messagingService.rutamesage;
    console.log(this.RutasPop);
  }

}
