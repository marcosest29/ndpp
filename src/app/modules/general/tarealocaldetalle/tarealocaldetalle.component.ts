import { Component, OnInit } from '@angular/core';
import {NodeService} from "../nodeservice";
import {MyMsgService} from "../msgservice";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-tarealocaldetalle',
  templateUrl: './tarealocaldetalle.component.html',
  styleUrls: ['./tarealocaldetalle.component.css']
})
export class TarealocaldetalleComponent implements OnInit {

  constructor(
      private nodeService: NodeService,
      private mymsgservice: MyMsgService,
      private messageService: MessageService) {
    this.loadListas();
  }

  articulos:any[];
  estados:any[];
  estado:any;
  selectedtareas:any[];
  codbarras:any;
  ngOnInit(): void {
    this.mymsgservice.publishMessage('pantalla-tarealocaldetalle');
  }
  doSearch(){
    this.nodeService.getArticulos().then(t => {
      this.articulos = t;
    });
  }

  loadListas(){
    this.nodeService.getEstadosL().then(est => {
      this.estados = est;
    });
  }

  gotoEdit(){

  }

  showColaborators(){

  }
}
