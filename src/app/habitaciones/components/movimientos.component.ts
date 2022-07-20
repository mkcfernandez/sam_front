import { RegistrarServicioComponent } from './registrar-servicio.component';
import { RegistrarBloqueoComponent } from './registrar-bloqueo.component';
import { RegistrarSalidaComponent } from './registrar-salida.component';
import { Component, OnInit} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MovimientosLista } from '../interfaces/movimientos-lista';
import { MovimientosService } from '../services/movimientos.service';
import { RegistrarEntradaComponent } from './registrar-entrada.component';
import { GlobalServicesService } from 'src/app/services/global-services.service';

@Component({
  selector: 'app-movimientos',
  templateUrl: '../pages/movimientos.component.html',
  styleUrls: ['../css/movimientos.component.css']
})
export class MovimientosComponent implements OnInit {

  notFound = false;
  movimientos: MovimientosLista[] = [];

  constructor(
    private movimientosService: MovimientosService,
    private globalService: GlobalServicesService,
    private modalService: NgbModal
    ) { 
      this.globalService.listen().subscribe((m:any)=> {
        this.getHabitacionMovimientosLista();
      })
    }

  ngOnInit(): void {
    this.getHabitacionMovimientosLista();
  }

  getHabitacionMovimientosLista(){
    this.notFound = false;
    this.movimientos = [];

    this.movimientosService.getHabitacionesMovvimientosLista().subscribe((response: any) => {
      this.movimientos = response;
      console.log(this.movimientos);
    });
  }

  registrarEntrada(habitacion_id: number, habitacion_numero: number, habitacion_tipo_id: number){
    const modalRef = this.modalService.open(RegistrarEntradaComponent, {size: 'lg'});
    modalRef.componentInstance.habitacion_id = habitacion_id;
    modalRef.componentInstance.habitacion_numero = habitacion_numero;
    modalRef.componentInstance.habitacion_tipo_id = habitacion_tipo_id;
  }

  registrarLimpieza(habitacion_id: number, habitacion_numero: number){
    const modalRef = this.modalService.open(RegistrarEntradaComponent, {size: 'lg'});
    modalRef.componentInstance.habitacion_id = habitacion_id;
    modalRef.componentInstance.habitacion_numero = habitacion_numero;
  }

  registrarSalida(habitacion_id: number, habitacion_numero: number){
    const modalRef = this.modalService.open(RegistrarSalidaComponent, {size: 'lg'});
    modalRef.componentInstance.habitacion_id = habitacion_id;
    modalRef.componentInstance.habitacion_numero = habitacion_numero;
  }

  registrarBloqueo(habitacion_id: number, habitacion_numero: number){
    const modalRef = this.modalService.open(RegistrarBloqueoComponent, {size: 'lg'});
    modalRef.componentInstance.habitacion_id = habitacion_id;
    modalRef.componentInstance.habitacion_numero = habitacion_numero;
  }

  registrarServicio(habitacion_id: number, habitacion_numero: number){
    const modalRef = this.modalService.open(RegistrarServicioComponent, {size: 'lg'});
    modalRef.componentInstance.habitacion_id = habitacion_id;
    modalRef.componentInstance.habitacion_numero = habitacion_numero;
  }

}
