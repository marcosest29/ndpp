import { Component, OnInit } from '@angular/core';
import {NodeService} from "../nodeservice";
import {MyMsgService} from "../msgservice";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-detalletarea',
  templateUrl: './detalletarea.component.html',
  styleUrls: ['./detalletarea.component.css']
})
export class DetalletareaComponent implements OnInit {

  constructor(
      private nodeService: NodeService,
      private mymsgservice: MyMsgService,
      private messageService: MessageService) {
    this.loadListas();
  }
  tipolocal:any;
  estado:any;
  rotacion:any;
  locales:any[];
  articulos:any[];
  codbarras:any;

  doSearch(){
    this.nodeService.getArticulos().then(t => {
      this.articulos = t;
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

}
