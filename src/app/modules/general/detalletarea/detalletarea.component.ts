import { Component, OnInit } from '@angular/core';
import {NodeService} from "../nodeservice";
import {MyMsgService} from "../msgservice";
import {MessageService} from "primeng/api";
import {Router} from "@angular/router";

@Component({
  selector: 'app-detalletarea',
  templateUrl: './detalletarea.component.html',
  styleUrls: ['./detalletarea.component.css']
})
export class DetalletareaComponent implements OnInit {

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
  articulos:any[];
  estados:any[];
  codbarras:any;
  selectedtareas:any;
  isShowModalColaborators:boolean=false;
  doSearch(){
    this.nodeService.getArticulos().then(t => {
      this.articulos = t;
    });
  }
  ngOnInit(): void {
    this.mymsgservice.publishMessage('pantalla-detalle2');
  }
  loadListas(){
    this.nodeService.getLocales().then(loc => {
      this.locales = loc;
    });
    this.nodeService.getEstadosL().then(est => {
      this.estados = est;
    });
  }

  gotoEdit(){
    // this.router.navigate(['nuevatarea'], {});
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
    // this.selectedColaborators=this.nodeService.informacionTarea.colaboradores;
    // this.selectedColaboratorsTable=this.selectedColaborators;
    // this.selectedColaboratorsTable.forEach(col => {
    //   col.check = false;
    // });
  }

}
