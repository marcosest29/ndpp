import { Component, OnInit } from '@angular/core';
import {NodeService} from "../nodeservice";
import {MyMsgService} from "../msgservice";
import {Router} from "@angular/router";
import {MessageService} from "primeng/api";
import {TpnodeService} from "../tpnode.service";

@Component({
  selector: 'app-tareaprogramada',
  templateUrl: './tareaprogramada.component.html',
  styleUrls: ['./tareaprogramada.component.css']
})
export class TareaprogramadaComponent implements OnInit {
  mensaje: string = '';
  mostrarAlerta: boolean = false;

  constructor(
      private nodeService: TpnodeService,
      private mymsgservice: MyMsgService,
      private router: Router,
      private messageService: MessageService) {
    this.loadListas();
  }

  ngOnInit(): void {
    this.mymsgservice.publishMessage('pantalla-tpinicio');
  }
  codtarea:any;
  estado:any;
  finicio:any;
  ffin:any;
  tipocalculo:any;
  calculos:any[];
  tareas:any[];
  estados:any[];

  doSearch(){
    this.nodeService.getTareas().then(t => {
      this.tareas = t;
    });
  }

  loadListas(){
    this.nodeService.getDistribucion().then(dist => {
      this.calculos = dist;
    });
    this.nodeService.getEstados().then(est => {
      this.estados = est;
    });
  }

  gotoEdit(){
    this.router.navigate(['nuevatareatp','2'], {});
  }
  gotoEject(estado){
    if(estado==='PAUSADA'){
      this.mostrarMensaje('Se activo acorrectamente')
    }else{
      this.mostrarMensaje('Se pauso acorrectamente')
    }

  }
  gotoInfo(){
    this.router.navigate(['tp-detalle-tarea-local'], {});
  }


  mostrarMensaje(mensaje: string) {
    this.mensaje = mensaje;

    setTimeout(() => {
      this.ocultarMensaje();
    }, 2000);
  }

  ocultarMensaje() {
    this.mensaje = '';
  }
  gotoNone(){

  }
}
