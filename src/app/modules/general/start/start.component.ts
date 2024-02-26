import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent {

  constructor(private router: Router) { }

  gotoTareas() {
    this.router.navigate(['tareas'], {});
  }

  gotoReportes() {
    this.router.navigate(['reportes'], {});
  }
  gotperiodicidad() {
    this.router.navigate(['periodicidad'], {});
  }
  gotoInicio(){
    this.router.navigate(['inicio'], {});
  }

  gotoLocales(){
    this.router.navigate(['tarealocal'], {});
  }
}
