import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { GlobalServicesService } from 'src/app/services/global-services.service';
import { HabitacionesList } from '../interfaces/habitaciones-list';
import { MovimientosService } from '../services/movimientos.service';

@Component({
  selector: 'app-cambio-habitacion',
  templateUrl: '../pages/cambio-habitacion.component.html',
  styleUrls: ['../css/cambio-habitacion.component.css']
})
export class CambioHabitacionComponent implements OnInit {

  @Input() habitacion_id: any;
  @Input() habitacion_numero: any;

  habitacion_id_cambio: any;
  habitacionSeleccionadaId: any = null;
  habitacionesList: HabitacionesList[] = [];

  formCambiarHabitacion!: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private movimientosService: MovimientosService,
    private globalService: GlobalServicesService,
    private readonly fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formCambiarHabitacion = this.initForm();
    this.catalogoHabitaciones(1);
    
  }
  catalogoHabitaciones(motel_id: number){
    this.movimientosService.getCatalogoHabitacionesDisponibleByMotelId(motel_id).subscribe((response: any) => {
      this.habitacionesList = response;
    });
  }
  
  guardar(){
    this.formCambiarHabitacion.patchValue({habitacion_id: this.habitacion_id});
    this.formCambiarHabitacion.patchValue({usuario_id: 2});
    console.log(this.formCambiarHabitacion.value);
      this.movimientosService.putpCambioHabitacion(this.formCambiarHabitacion.value).subscribe((res) => {
        console.log(res)
        this.globalService.filter('Entrada registrada correctamente');
      });
    this.activeModal.close();
  };
  
  habitacionSeleccionada(){
    this.habitacion_id_cambio = this.habitacionSeleccionadaId;
  }
  
  initForm(): FormGroup{
    return this.fb.group({
      habitacion_id       : [''],
      habitacion_id_cambio: [''],
      observaciones       : [''],
      usuario_id          : ['']
    })
  }
  }