import { RegistrarHoraAdicionalComponent } from 'src/app/habitaciones/components/registrar-hora-adicional.component';
import { RegistrarServicioComponent } from './registrar-servicio.component';
import { RegistrarBloqueoComponent } from './registrar-bloqueo.component';
import { Component, OnInit} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MovimientosLista } from '../interfaces/movimientos-lista';
import { MovimientosService } from '../services/movimientos.service';
import { RegistrarEntradaComponent } from './registrar-entrada.component';
import { GlobalServicesService } from 'src/app/services/global-services.service';
import { RegistrarSalida } from '../interfaces/registrar-salida';
import { RegistrarSalidaComponent } from './registrar-salida.component';
import { RegistrarLimpiezaComponent } from './registrar-limpieza.component';
import { RegistrarDesbloqueoComponent } from './registrar-desbloqueo.component';
import { ModificarTarifaComponent } from 'src/app/habitaciones/components/modificar-tarifa.component';
import { CambioHabitacionComponent } from './cambio-habitacion.component';

@Component({
  selector: 'app-movimientos',
  templateUrl: '../pages/movimientos.component.html',
  styleUrls: ['../css/movimientos.component.css']
})
export class MovimientosComponent implements OnInit {

  notFound = false;
  movimientos: MovimientosLista[] = [];
  registrarSalidaHabitacion!: RegistrarSalida;
  usuario_id: any;

  estatus_id: number = 0;
  estatusSeleccionado: number = 0;

  h_ocupadas: any;
  h_sucias: any;
  h_bloqueadas: any;
  h_disponibles: any;

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
    // this.movimientos = [];

    this.movimientosService.getHabitacionesMovvimientosLista().subscribe((response: any) => {
      this.movimientos = response;
      this.h_disponibles = this.movimientos.filter(x => x.estado_habitacion === 0).length;
      this.h_ocupadas = this.movimientos.filter(x => x.estado_habitacion === 1).length;
      this.h_sucias = this.movimientos.filter(x => x.estado_habitacion === 2).length;
      this.h_bloqueadas = this.movimientos.filter(x => x.estado_habitacion === 3).length;
    });
  }

  registrarEntrada(habitacion_id: number, habitacion_numero: number, habitacion_tipo_id: number){
    const modalRef = this.modalService.open(RegistrarEntradaComponent, {size: 'lg'});
    modalRef.componentInstance.habitacion_id = habitacion_id;
    modalRef.componentInstance.habitacion_numero = habitacion_numero;
    modalRef.componentInstance.habitacion_tipo_id = habitacion_tipo_id;
  }

  modificarTarifa(habitacion_id: number, habitacion_numero: number, habitacion_tipo_id: number, movimiento_habitacion_id: number){
    const modalRef = this.modalService.open(ModificarTarifaComponent, {size: 'lg'});
    modalRef.componentInstance.habitacion_id = habitacion_id;
    modalRef.componentInstance.habitacion_numero = habitacion_numero;
    modalRef.componentInstance.habitacion_tipo_id = habitacion_tipo_id;
    modalRef.componentInstance.movimiento_habitacion_id = movimiento_habitacion_id;
  }

  cambiarHabitacion(habitacion_id: number, habitacion_numero: number){
    const modalRef = this.modalService.open(CambioHabitacionComponent, {size: 'lg'});
    modalRef.componentInstance.habitacion_id = habitacion_id;
    modalRef.componentInstance.habitacion_numero = habitacion_numero;
  }

  registrarHoraAdicional(habitacion_numero: number, movimiento_habitacion_id: number){
    const modalRef = this.modalService.open(RegistrarHoraAdicionalComponent, {size: 'lg'});
    modalRef.componentInstance.habitacion_numero = habitacion_numero;
    modalRef.componentInstance.movimiento_habitacion_id = movimiento_habitacion_id;
  }

  registrarSalida(habitacion_id: number, habitacion_numero: number){
    const modalRef = this.modalService.open(RegistrarSalidaComponent, {size: 'lg'});
    modalRef.componentInstance.habitacion_id = habitacion_id;
    modalRef.componentInstance.habitacion_numero = habitacion_numero;
  }

  registrarLimpieza(habitacion_id: number, habitacion_numero: number){
    const modalRef = this.modalService.open(RegistrarLimpiezaComponent, {size: 'lg'});
    modalRef.componentInstance.habitacion_id = habitacion_id;
    modalRef.componentInstance.habitacion_numero = habitacion_numero;
  }

  registrarDesbloqueo(habitacion_id: number, habitacion_numero: number){
    const modalRef = this.modalService.open(RegistrarDesbloqueoComponent, {size: 'lg'});
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

  estatusSeleccionadoId(){
    this.estatus_id = this.estatusSeleccionado;
    this.movimientos = this.movimientos.filter(x => x.estado_habitacion === this.estatus_id);
  }
}
