import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/dashboard'                , title: 'Dashboard'        ,  icon: 'fas fa-tachometer-alt', class: '001' },
  { path: '/habitaciones/movimientos' , title: 'Rack Habitaciones',  icon: 'fas fa-bed'           , class: '002' },
  { path: '/almacen'                  , title: 'Almacén'          ,  icon: 'fas fa-archive'       , class: '003' },
  { path: '/usuarios'                 , title: 'Usuarios'         ,  icon: 'fas fa-users'         , class: '004' },
  { path: '/reportes'                 , title: 'Reportes'         ,  icon: 'fas fa-clipboard-list', class: '005' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @ViewChild('sidebarTg')
  sidebarT!: ElementRef;

  public menuItems: any[] = [];

  constructor(
    private router: Router,
    private renderer: Renderer2) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

  sidebarToggle(): void{
    const sidebarToggle =  document.getElementById("sidebarToggle");
    const bodyToggle =  document.querySelector("body");

    if(bodyToggle?.classList.contains('active'))
    {
      this.renderer.removeClass(sidebarToggle, 'active');
      this.renderer.removeClass(bodyToggle, 'active');
    }
    else
    {
      this.renderer.addClass(sidebarToggle, 'active');
      this.renderer.addClass(bodyToggle, 'active');
    }
  }

}
