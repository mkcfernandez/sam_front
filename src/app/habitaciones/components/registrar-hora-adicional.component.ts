import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { GlobalServicesService } from 'src/app/services/global-services.service';
import { MovimientosService } from '../services/movimientos.service';

@Component({
  selector: 'app-registrar-hora-adicional',
  templateUrl: '../pages/registrar-hora-adicional.component.html',
  styleUrls: ['../css/registrar-hora-adicional.component.css']
})
export class RegistrarHoraAdicionalComponent implements OnInit {
  @Input() habitacion_numero: any;
  @Input() movimiento_habitacion_id: any;
  horaAdicionalSeleecionada: any;
  formRegistrarHoraAdicional!: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private movimientosService: MovimientosService,
    private globalService: GlobalServicesService,
    private readonly fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formRegistrarHoraAdicional = this.initForm();
  }

  guardar(){
    this.formRegistrarHoraAdicional.patchValue({movimiento_habitacion_id: this.movimiento_habitacion_id});
    this.formRegistrarHoraAdicional.patchValue({usuario_id: 2});

    console.log(this.formRegistrarHoraAdicional.value);
      this.movimientosService.putRegistrarEntradaHabitacionHoraAdicional(this.formRegistrarHoraAdicional.value).subscribe((res) => {
        console.log(res)
        this.globalService.filter('Hora Adicional registrada correctamente');
      });
    this.activeModal.close();
  };

  horaAdicionalSeleccionada(){
    this.formRegistrarHoraAdicional.patchValue({hora_adicional: this.horaAdicionalSeleecionada});
  }

  initForm(): FormGroup{
    return this.fb.group({
      hora_adicional          : [''],
      movimiento_habitacion_id: [''],
      observaciones           : [''],
      usuario_id              : ['']
    })
  }

}
