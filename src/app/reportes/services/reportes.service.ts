import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReporteService {
  baseURL = environment.webAPI;
  
  constructor(private http: HttpClient) { }

  postReporteCorteXTurno(body: any){
    return this.http.post(this.baseURL + 'reportes/corte_turno', body);
  }
}
