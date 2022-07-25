import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { GlobalServicesService } from 'src/app/services/global-services.service';
import { MotivoBloqueo } from '../interfaces/motivo-bloqueo';
import { MovimientosService } from '../services/movimientos.service';



@Component({
  selector: 'app-registrar-bloqueo',
  templateUrl: '../pages/registrar-bloqueo.component.html',
  styleUrls: ['../css/registrar-bloqueo.component.css']
})
export class RegistrarBloqueoComponent implements OnInit {
  
  @Input() habitacion_id: any;
  @Input() habitacion_numero: any;
  motivoBloqueo: MotivoBloqueo[] = [];
  motivo_id: any;
  motivoBloqueoSeleccionadoId: any = null;

  formRegistrarBloqueo!: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private movimientosService: MovimientosService,
    private globalService: GlobalServicesService,
    private readonly fb: FormBuilder
    ) {}

  ngOnInit(): void {
    this.catalogoMotivoBloqueo();
    this.formRegistrarBloqueo = this.initForm();
  }


  catalogoMotivoBloqueo(){
    this.motivoBloqueo = [];
    this.movimientosService.getHabitacionesMotivoBloqueoLista().subscribe((response: any) => {
      this.motivoBloqueo = response;
    });
  }

  motivoSeleccionado(){
    this.motivo_id = this.motivoBloqueoSeleccionadoId;
  }

  guardar(){
    this.formRegistrarBloqueo.patchValue({habitacion_id: this.habitacion_id});
    this.formRegistrarBloqueo.patchValue({usuario_id: 2});
    console.log(this.formRegistrarBloqueo.value);

    // this.movimientosService.postRegistrarBloqueoHabitacion(this.formRegistrarBloqueo.value).subscribe((res) => {
    //   console.log(res)
    //   this.globalService.filter('Bloqueo registrado correctamente');
    // });
    this.activeModal.close();
    
  };

  initForm(): FormGroup{
    return this.fb.group({
      habitacion_id         : [''],
      motivo_bloqueo_id     : ['', Validators.required],
      usuario_id            : ['']
    })
  }

}
