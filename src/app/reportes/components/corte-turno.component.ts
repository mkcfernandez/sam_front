import { Component, OnInit } from '@angular/core';
import { CorteTurno } from '../interfaces/corte-turno';
import { ReporteService } from '../services/reportes.service';

@Component({
  selector: 'app-corte-turno',
  templateUrl: '../pages/corte-turno.component.html',
  styleUrls: ['../css/corte-turno.component.css']
})
export class CorteTurnoComponent implements OnInit {

  corteTurnoLst: CorteTurno [] = [];
  // corteTurno: CorteTurno;

  constructor(
    private reporteServices: ReporteService
  ) 
  {
    // this.corteTurno = new CorteTurno();

    // this.corteTurno = {
    //   motel_id: 0,
    //   fecha_inicio: '',
    //   fecha_fin: '',
    //   tipo_habitacion_nombre: '',
    //   tarifa_precio: 0,
    //   vendidas: 0,
    //   total_venta: 0
    // }

    
  }

  ngOnInit(): void {
    this.postReporteCorteXTurno();
  }

  postReporteCorteXTurno(){
    // this.corteTurnoLst = [];

    // this.corteTurno.motel_id = 1;
    // this.corteTurno.fecha_inicio = "2022-07-28 07:00";
    // this.corteTurno.fecha_fin = "2022-07-28 07:00";

    // this.reporteServices.postReporteCorteXTurno(this.corteTurno).subscribe((response: any) => {
    //   this.corteTurnoLst = response;
    //   console.log(this.corteTurnoLst);
    // });
  }

}
