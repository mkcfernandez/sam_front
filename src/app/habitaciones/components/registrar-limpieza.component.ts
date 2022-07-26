import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { GlobalServicesService } from 'src/app/services/global-services.service';
import { CatalogoCamaristas } from '../interfaces/catalogo-camaristas';
import { RegistrarLimpieza } from '../interfaces/registrar-limpieza';
import { MovimientosService } from '../services/movimientos.service';

@Component({
  selector: 'app-registrar-limpieza',
  templateUrl: '../pages/registrar-limpieza.component.html',
  styleUrls: ['../css/registrar-limpieza.component.css']
})
export class RegistrarLimpiezaComponent implements OnInit {
  @Input() habitacion_id: any;
  @Input() habitacion_numero: any;
  catCamaristas: CatalogoCamaristas[] = [];
  usuario_id: any = 2;
  camaristaid: any;
  camaristaseleecionadaid: any = null;
  limpieza!: RegistrarLimpieza;

  formRegistrarLimpieza!: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private movimientosService: MovimientosService,
    private globalService: GlobalServicesService,
    private readonly fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formRegistrarLimpieza = this.initForm();
    this.catalogoCamaristas(1);
  }


  catalogoCamaristas(motel_id: number){
    this.movimientosService.getCatalogoCamaristasByMotelId(motel_id).subscribe((response: any) => {
      this.catCamaristas = response;
    });
  }

  guardar(){
    this.formRegistrarLimpieza.patchValue({habitacion_id: this.habitacion_id});
    this.formRegistrarLimpieza.patchValue({usuario_id: 2});

    this.movimientosService.postRegistrarLimpiezaHabitacion(this.formRegistrarLimpieza.value).subscribe((res) => {
      console.log(res)
      this.globalService.filter('Limpieza registrada correctamente');
    });
    this.activeModal.close();
  };


  camaristaSeleccionada(){
    this.camaristaid = this.camaristaseleecionadaid;
  }

  initForm(): FormGroup{
    return this.fb.group({
      habitacion_id   : [''],
      camarista_id    : [''],
      usuario_id      : ['']
    })
  }

}
