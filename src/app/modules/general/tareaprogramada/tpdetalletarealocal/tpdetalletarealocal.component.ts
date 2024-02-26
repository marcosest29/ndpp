import { Component, OnInit } from '@angular/core';
import {NodeService} from "../../nodeservice";
import {MyMsgService} from "../../msgservice";
import {Router} from "@angular/router";
import {MessageService} from "primeng/api";
import {TpnodeService} from "../../tpnode.service";

@Component({
  selector: 'app-tpdetalletarealocal',
  templateUrl: './tpdetalletarealocal.component.html',
  styleUrls: ['./tpdetalletarealocal.component.css']
})
export class TpdetalletarealocalComponent implements OnInit {
  constructor(
      private nodeService: TpnodeService,
      private mymsgservice: MyMsgService,
      private router: Router,
      private messageService: MessageService) {
    this.loadListas();
  }
  tipolocal:any;
  estados:any;
  rotacion:any;
  locales:any[];
  tareas:any[];
  codbarras:any;
  tipoestado:any[];
  selectedtareas:any;
  notificadosSelected:any;
  notificados:any[];
  doSearch(){
    this.nodeService.getTareaslocal().then(t => {
      this.tareas = t;
    });
  }
  ngOnInit(): void {
    this.mymsgservice.publishMessage('pantalla-detalle1');
    // @ts-ignore
    this.notificados = [{nombre:"SI"},{nombre:"NO"}];
  }
  loadListas(){
    this.nodeService.getLocales().then(loc => {
      this.locales = loc;
    });
    this.nodeService.getEstados().then(est => {
      this.estados = est;
    });
  }

  gotoEdit(){

  }

  gotoTareas(){
    this.router.navigate(['tp-detalle-tarea'], {});
  }

}
