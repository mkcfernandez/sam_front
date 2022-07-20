import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-registrar-bloqueo',
  templateUrl: '../pages/registrar-bloqueo.component.html',
  styleUrls: ['../css/registrar-bloqueo.component.css']
})
export class RegistrarBloqueoComponent implements OnInit {
  
  @Input() habitacion_id: any;
  @Input() habitacion_numero: any;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
  }

}
