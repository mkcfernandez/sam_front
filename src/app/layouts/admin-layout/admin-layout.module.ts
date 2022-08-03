import { CorteTurnoComponent } from './../../reportes/components/corte-turno.component';
import { RegistrarEntradaComponent } from './../../habitaciones/components/registrar-entrada.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminLayoutRoutes } from './admin-layout.routing';


import { DashboardComponent } from './../../dashboard/dashboard.component';
import { MovimientosComponent } from './../../habitaciones/components/movimientos.component';
import { AlmacenComponent } from './../../almacen/components/almacen.component';
import { UsuariosComponent } from './../../usuarios/components/usuarios.component';
import { ReportesComponent } from './../../reportes/components/reportes.component';
import { RegistrarBloqueoComponent } from 'src/app/habitaciones/components/registrar-bloqueo.component';
import { RegistrarServicioComponent } from 'src/app/habitaciones/components/registrar-servicio.component';
import { RegistrarHoraAdicionalComponent } from 'src/app/habitaciones/components/registrar-hora-adicional.component';
import { RegistrarSalidaComponent } from '../../habitaciones/components/registrar-salida.component';
import { RegistrarLimpiezaComponent } from 'src/app/habitaciones/components/registrar-limpieza.component';
import { RegistrarDesbloqueoComponent } from 'src/app/habitaciones/components/registrar-desbloqueo.component';



@NgModule({
  declarations: [
    DashboardComponent,
    MovimientosComponent,
    AlmacenComponent,
    UsuariosComponent,
    ReportesComponent,
    RegistrarEntradaComponent,
    RegistrarBloqueoComponent,
    RegistrarServicioComponent,
    RegistrarHoraAdicionalComponent,
    RegistrarSalidaComponent,
    RegistrarLimpiezaComponent,
    RegistrarDesbloqueoComponent,
    CorteTurnoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
  ]
})
export class AdminLayoutModule { }
