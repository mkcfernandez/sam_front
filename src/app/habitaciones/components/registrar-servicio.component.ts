import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-registrar-servicio',
  templateUrl: '../pages/registrar-servicio.component.html',
  styleUrls: ['../css/registrar-servicio.component.css']
})
export class RegistrarServicioComponent implements OnInit {
 
  @Input() habitacion_id: any;
  @Input() habitacion_numero: any;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
  }

}
