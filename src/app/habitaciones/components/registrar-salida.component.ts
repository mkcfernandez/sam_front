import { EstadosHabitacion } from './../interfaces/estados-habitacion';
import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MovimientosService } from '../services/movimientos.service';
import { GlobalServicesService } from 'src/app/services/global-services.service';

@Component({
  selector: 'app-registrar-salida',
  templateUrl: '../pages/registrar-salida.component.html',
  styleUrls: ['../css/registrar-salida.component.css']
})
export class RegistrarSalidaComponent implements OnInit {
  
  @Input() habitacion_id: any;
  @Input() habitacion_numero: any;

  
    usuario: any;
    estado_habitacion: any;


  constructor(
    public activeModal: NgbActiveModal,
    private movimientosService: MovimientosService,
    private globalService: GlobalServicesService
    ) {
      this.usuario = 2;
      this.estado_habitacion = 2;
    }



  ngOnInit(): void {
  }

  registrarSalida(){
    
   let body = {
      habitacion_id: Number,
      habitacion_estado: Number,
      usuario_id: Number
   };

  body.habitacion_id = this.habitacion_id;
  body.habitacion_estado = this.estado_habitacion;
  body.usuario_id = this.usuario;

    this.movimientosService.postRegistrarSalidaHabitacion(body).subscribe((res) => {
      this.globalService.filter('Salida registrada correctamente');
    });
    this.activeModal.close();
  }

}
