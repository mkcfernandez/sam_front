import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovimientosService {
  baseURL = environment.webAPI;
  constructor(private http: HttpClient) { }

  getHabitacionesMovvimientosLista(){
    return this.http.get(this.baseURL + 'habitacion/movimiento/lista');
  }

  postRegistrarEntradaHabitacion(body: any){
    return this.http.post(this.baseURL + 'habitacion/movimiento/registrar', body);
  }

  putRegistrarEntradaHabitacion(body: any){
    return this.http.post(this.baseURL + 'habitacion/movimiento/registrar', body);
  }

  postRegistrarSalidaHabitacion(body: any){
    return this.http.post(this.baseURL + 'habitacion/movimiento/cambio_de_estatus', body);
  }

  postRegistrarBloqueoHabitacion(body: any){
    return this.http.post(this.baseURL + 'habitacion/movimiento/registrar/bloqueo', body);
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
}
