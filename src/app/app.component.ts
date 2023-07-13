import { Component,OnInit } from '@angular/core';
import { Inject, PLATFORM_ID } from '@angular/core';
import { MyMsgService } from './modules/general/msgservice';
import { isPlatformBrowser } from '@angular/common';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  pantalla = 'home';
  titulo = "No Disponible Producto Piso";
  items: MenuItem[] | undefined;

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private mymsgservice: MyMsgService,
    private router: Router) {
  }
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const navMain = document.getElementById('navbarCollapse');
      if (navMain) {
        navMain.onclick = function onClick() {
          if (navMain) {
            navMain.classList.remove("show");
          }
        }
      }
    }

    this.items = [
      {
          label: 'Asistida',
          icon: 'pi pi-fw pi-plus',
          command: () => {
            this.gotoCrearTarea();
        }
      },
      {
          label: 'Manual',
          icon: 'pi pi-fw pi-trash'
      }
  ];

    this.mymsgservice.source.subscribe(msg => {
      if (msg.startsWith("pantalla")) {
        this.pantalla = msg.split("-")[1];
      }
      console.log("Valor de pantalla es:", this.pantalla);
      if (this.pantalla === "inicio") {
        this.titulo = "Administración de tareas";
      }
      if (this.pantalla === "creartarea") {
        this.titulo = "Nueva tarea";
      }
    });
  }

  gotoCrearTarea(){
    this.router.navigate(['nuevatarea'], {});
  }
}