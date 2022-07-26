import { Value } from './../../../../node_modules/regjsparser/parser.d';
import { Tarifas } from './../interfaces/tarifas';
import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { MovimientosService } from '../services/movimientos.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalServicesService } from 'src/app/services/global-services.service';
import { MovimientosLista } from '../interfaces/movimientos-lista';

@Component({
  selector: 'app-registrar-entrada',
  templateUrl: '../pages/registrar-entrada.component.html',
  styleUrls: ['../css/registrar-entrada.component.css']
})
export class RegistrarEntradaComponent implements OnInit {

  @Input() habitacion_id: any;
  @Input() habitacion_numero: any;
  @Input() habitacion_tipo_id: any;
  tarifas: Tarifas[] = [];
  tarifa_id: any;
  tarifaSeleccionadaId: any = null;
  movimiento_habitacion_id: any;
  movimiento!: MovimientosLista;

  model!: NgbDateStruct;

  formRegistrarEntrada!: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private movimientosService: MovimientosService,
    private globalService: GlobalServicesService,
    private readonly fb: FormBuilder
    ) {}

    ngOnInit(): void {
      this.formRegistrarEntrada = this.initForm();
      this.catalogoTarifas(1, this.habitacion_tipo_id);
  }

  catalogoTarifas(motel_id: number, habitacion_tipo_id: number){
    this.movimientosService.getTarifasByMotelIdAndTipoHabitacionId(motel_id, habitacion_tipo_id).subscribe((response: any) => {
      this.tarifas = response;
    });
  }

  guardar(){
    this.formRegistrarEntrada.patchValue({habitacion_id: this.habitacion_id});
    this.formRegistrarEntrada.patchValue({usuario_id: 2});

      this.movimientosService.postRegistrarEntradaHabitacion(this.formRegistrarEntrada.value).subscribe((res) => {
        console.log(res)
        this.globalService.filter('Entrada registrada correctamente');
      });
    this.activeModal.close();
  };

  tarifaSeleccionada(){
    this.tarifa_id = this.tarifaSeleccionadaId;
  }

  initForm(): FormGroup{
    return this.fb.group({
      habitacion_id   : [''],
      tarifa_id       : [''],
      placa_vehiculo  : [''],
      adicional       : [0],
      entrada         : [''],
      hora_adicional  : [0],
      observaciones   : [''],
      usuario_id      : ['']
    })
  }
}
