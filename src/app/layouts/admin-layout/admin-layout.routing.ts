import { Routes } from "@angular/router";
import { DashboardComponent } from "./../../dashboard/dashboard.component";
import { MovimientosComponent } from './../../habitaciones/components/movimientos.component';
import { AlmacenComponent } from './../../almacen/components/almacen.component';
import { UsuariosComponent } from './../../usuarios/components/usuarios.component';
import { ReportesComponent } from './../../reportes/components/reportes.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',                    component: DashboardComponent },
    { path: 'habitaciones/movimientos',     component: MovimientosComponent },
    { path: 'almacen',                      component: AlmacenComponent },
    { path: 'usuarios',                     component: UsuariosComponent },
    { path: 'reportes',                     component: ReportesComponent },
];