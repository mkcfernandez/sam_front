import { Routes } from "@angular/router";
import { AuthComponent } from "src/app/auth/auth.component";


export const AuthLayoutRoutes: Routes = [
    { path: 'login',    component: AuthComponent },
];