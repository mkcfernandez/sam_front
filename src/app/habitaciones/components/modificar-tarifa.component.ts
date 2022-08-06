import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { GlobalServicesService } from 'src/app/services/global-services.service';
import { MovimientosLista } from '../interfaces/movimientos-lista';
import { Tarifas } from '../interfaces/tarifas';
import { MovimientosService } from '../services/movimientos.service';

@Component({
  selector: 'app-modificar-tarifa',
  templateUrl: '../pages/modificar-tarifa.component.html',
  styleUrls: ['../css/modificar-tarifa.component.css']
})
export class ModificarTarifaComponent implements OnInit {

  @Input() habitacion_id: any;
  @Input() habitacion_numero: any;
  @Input() habitacion_tipo_id: any;
  @Input() movimiento_habitacion_id: any;
  
  tarifas: Tarifas[] = [];
  tarifa_id: any;
  tarifaSeleccionadaId: any = null;

  formModificarTarifa!: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private movimientosService: MovimientosService,
    private globalService: GlobalServicesService,
    private readonly fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formModificarTarifa = this.initForm();
    this.catalogoTarifas(1, this.habitacion_tipo_id);
}

catalogoTarifas(motel_id: number, habitacion_tipo_id: number){
  this.movimientosService.getTarifasByMotelIdAndTipoHabitacionId(motel_id, habitacion_tipo_id).subscribe((response: any) => {
    this.tarifas = response;
  });
}

guardar(){
  this.formModificarTarifa.patchValue({movimiento_habitacion_id: this.movimiento_habitacion_id});
  console.log(this.movimiento_habitacion_id);
  this.formModificarTarifa.patchValue({usuario_id: 2});
    this.movimientosService.putpActualizarTarifaHabitacion(this.formModificarTarifa.value).subscribe((res) => {
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
    movimiento_habitacion_id  : [''],
    tarifa_id                 : [''],
    observaciones             : [''],
    usuario_id                : ['']
  })
}
}
