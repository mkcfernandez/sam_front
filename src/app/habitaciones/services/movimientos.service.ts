import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RegistrarSalida } from '../interfaces/registrar-salida';

@Injectable({
  providedIn: 'root'
})
export class MovimientosService {
  baseURL = environment.webAPI;
  constructor(private http: HttpClient) { }

  getHabitacionesMovvimientosLista(){
    return this.http.get(this.baseURL + 'habitacion/movimiento/lista');
  }

  getHabitacionMovimientosById(movimiento_habitacion_id: number){
    return this.http.get(this.baseURL + 'habitacion/movimiento/' + movimiento_habitacion_id);
  }

  postRegistrarEntradaHabitacion(body: any){
    return this.http.post(this.baseURL + 'habitacion/movimiento/registrar', body);
  }

  putpActualizarTarifaHabitacion(body: any){
    return this.http.put(this.baseURL + 'habitacion/movimiento/actualizar/tarifa', body);
  }

  putpCambioHabitacion(body: any){
    return this.http.put(this.baseURL + 'habitacion/movimiento/cambio_habitacion', body);
  }

  putRegistrarEntradaHabitacionHoraAdicional(body: any){
    return this.http.post(this.baseURL + 'habitacion/movimiento/hora_adicional', body);
  }

  postRegistrarSalidaHabitacion(body:any){
    return this.http.post(this.baseURL + 'habitacion/movimiento/registrar/salida/', body);
  }

  postRegistrarLimpiezaHabitacion(body:any){
    return this.http.post(this.baseURL + 'habitacion/movimiento/registrar/limpieza/', body);
  }

  postRegistrarDesbloqueoHabitacion(body: any){
    return this.http.post(this.baseURL + 'habitacion/movimiento/registrar/desbloqueo', body);
  }

  postRegistrarBloqueoHabitacion(body: any){
    return this.http.post(this.baseURL + 'habitacion/movimiento/registrar/bloqueo', body);
  }

  // Catálogos

  getCatalogoHabitacionesByMotelId(motel_id: number){
    return this.http.get(this.baseURL + 'catalogo/habitaciones/' + motel_id);
  }

  getCatalogoHabitacionesDisponibleByMotelId(motel_id: number){
    return this.http.get(this.baseURL + 'catalogo/habitaciones/disponibles/' + motel_id);
  }

  getTarifasByMotelId(motel_id: number){
    return this.http.get(this.baseURL + 'catalogo/tarifas/' + motel_id);
  }

  getTarifasByMotelIdAndTipoHabitacionId(motel_id: number, tipo_habitacion_id: number){
    return this.http.get(this.baseURL + 'catalogo/tarifas/' + motel_id + '/tipo_habitacion/' + tipo_habitacion_id);
  }

  getHabitacionesMotivoBloqueoLista(){
    return this.http.get(this.baseURL + 'catalogo/motivo_bloqueo');
  }

  getCatalogoCamaristasByMotelId(motel_id: number){
    return this.http.get(this.baseURL + 'catalogo/camaristas/' + motel_id);
  }
}
