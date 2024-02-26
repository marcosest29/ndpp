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
  gotoInfo(){
    this.router.navigate(['tp-detalle-tarea-local'], {});
  }

  gotoNone(){

  }
}
