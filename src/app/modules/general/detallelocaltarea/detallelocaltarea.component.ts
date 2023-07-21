import { Component, OnInit } from '@angular/core';
import {NodeService} from "../nodeservice";
import {MyMsgService} from "../msgservice";
import {MessageService} from "primeng/api";
import {Router} from "@angular/router";

@Component({
  selector: 'app-detallelocaltarea',
  templateUrl: './detallelocaltarea.component.html',
  styleUrls: ['./detallelocaltarea.component.css']
})
export class DetallelocaltareaComponent implements OnInit {
    constructor(
        private nodeService: NodeService,
        private mymsgservice: MyMsgService,
        private router: Router,
        private messageService: MessageService) {
      this.loadListas();
    }
    tipolocal:any;
    estado:any;
    rotacion:any;
    locales:any[];
    tareas:any[];
    codbarras:any;
    doSearch(){
      this.nodeService.getTareaslocal().then(t => {
        this.tareas = t;
      });
    }
    ngOnInit(): void {
      this.mymsgservice.publishMessage('pantalla-detalle');
    }
    loadListas(){
      this.nodeService.getLocales().then(loc => {
        this.locales = loc;
      });
    }

    gotoEdit(){

    }

    gotoTareas(){
        this.router.navigate(['detalle-tarea'], {});
    }

}
