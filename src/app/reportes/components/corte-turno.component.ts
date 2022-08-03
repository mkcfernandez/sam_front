import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CorteTurno } from '../interfaces/corte-turno';
import { ReporteService } from '../services/reportes.service';

@Component({
  selector: 'app-corte-turno',
  templateUrl: '../pages/corte-turno.component.html',
  styleUrls: ['../css/corte-turno.component.css']
})
export class CorteTurnoComponent implements OnInit {

  corteTurnoLst: CorteTurno [] = [];
  body: any;
  formCorteTurnos!: FormGroup;
  totalVendidas: number = 0;
  totalIngreso: number = 0;

  constructor(
    private reporteServices: ReporteService,
    private readonly fb: FormBuilder
  ) 
  {
    this.body = {
      motel_id: Number,
      fecha_inicio: String,
      fecha_fin: String
    }
  }

  ngOnInit(): void {
    this.formCorteTurnos = this.initForm();
  }

  postReporteCorteXTurno(){
    this.corteTurnoLst = [];

    // this.body.motel_id = 1;
    // this.body.fecha_inicio =  this.formCorteTurnos.patchValue({fecha_i: 2});
    // this.body.fecha_fin = this.formCorteTurnos.patchValue({fecha_f: 2});

    this.formCorteTurnos.patchValue({motel_id: 1});
    this.totalVendidas = 0;
    this.totalIngreso = 0;

    this.reporteServices.postReporteCorteXTurno(this.formCorteTurnos.value).subscribe((response: any) => {
      this.corteTurnoLst = response;

      this.corteTurnoLst.forEach(item => {
        this.totalVendidas += item.vendidas;
      });

      this.corteTurnoLst.forEach(item => {
        this.totalIngreso += item.total_venta;
      });
    });
  }

  initForm(): FormGroup{
    return this.fb.group({
      motel_id : [''],
      fecha_inicio  : [''],
      fecha_fin  : ['']
    })
  }

}
