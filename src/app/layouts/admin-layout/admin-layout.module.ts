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
import { RegistrarSalidaComponent } from 'src/app/habitaciones/components/registrar-salida.component';
import { RegistrarBloqueoComponent } from 'src/app/habitaciones/components/registrar-bloqueo.component';
import { RegistrarServicioComponent } from 'src/app/habitaciones/components/registrar-servicio.component';



@NgModule({
  declarations: [
    DashboardComponent,
    MovimientosComponent,
    AlmacenComponent,
    UsuariosComponent,
    ReportesComponent,
    RegistrarEntradaComponent,
    RegistrarSalidaComponent,
    RegistrarBloqueoComponent,
    RegistrarServicioComponent
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
