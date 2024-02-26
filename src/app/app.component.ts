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
  titulo = 'No Disponible Producto Piso';
  items: MenuItem[] | undefined;
  tpitems: MenuItem[] | undefined;
  isShowModalColaborators:boolean=false;
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
      }
  ];    this.tpitems = [
      {
          label: 'Tarea Periodica',
          icon: 'pi pi-fw pi-plus',
          command: () => {
            this.gotoCrearTpTarea();
        }
      }
  ];

    this.mymsgservice.source.subscribe(msg => {
      if (msg.startsWith("pantalla")) {
        setTimeout(()=>{
          this.pantalla = msg.split("-")[1];
          if (this.pantalla === "inicio") {
            setTimeout(()=>{
              this.titulo = "Administración de tareas";
            },1);
          }if (this.pantalla === "tpinicio") {
            setTimeout(()=>{
              this.titulo = "Administración periodicidad de configuraciones";
            },1);
          }
          if (this.pantalla === "detalle") {
            setTimeout(()=>{
              this.titulo = "Detalle de tareas";
            },1);
          }
          if (this.pantalla === "creartarea") {
            setTimeout(()=>{
              this.titulo = "Nueva tarea";
            },1);
          }
        },1);
      }
    });
  }

  gotoCrearTpTarea(){
    this.router.navigate(['nuevatareatp','1'], {});
  }
 gotoCrearTarea(){
    this.router.navigate(['nuevatarea','1'], {});
  }

  showColaborators(){
    // this.selectedColaborator = col;
    this.isShowModalColaborators=true;
  }
  closeViewColaborators(){
    this.isShowModalColaborators=false;
  }

  AddColaborators(){
    this.closeViewColaborators();
  }
}
