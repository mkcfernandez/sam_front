import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { GlobalServicesService } from 'src/app/services/global-services.service';
import { MovimientosService } from '../services/movimientos.service';

@Component({
  selector: 'app-registrar-desbloqueo',
  templateUrl: '../pages/registrar-desbloqueo.component.html',
  styleUrls: ['../css/registrar-desbloqueo.component.css']
})
export class RegistrarDesbloqueoComponent implements OnInit {

  @Input() habitacion_id: any;
  @Input() habitacion_numero: any;
  usuario_id: any = 2;

  constructor(
    public activeModal: NgbActiveModal,
    private movimientosService: MovimientosService,
    private globalService: GlobalServicesService
  ) { }

  ngOnInit(): void {
  }

  guardar(){
    let body = {
      habitacion_id: Number,
      usuario_id: Number
    }

    body.habitacion_id = this.habitacion_id;
    body.usuario_id = this.usuario_id;

    console.log(body);


    this.movimientosService.postRegistrarDesbloqueoHabitacion(body).subscribe((res) => {
      console.log(res)
      this.globalService.filter('Bloqueo registrado correctamente');
    });
    this.activeModal.close();
  };

}
