import { Component, OnInit } from '@angular/core';
import {NodeService} from "../../nodeservice";
import {MyMsgService} from "../../msgservice";
import {Router} from "@angular/router";
import {MessageService} from "primeng/api";
import {TpnodeService} from "../../tpnode.service";

@Component({
  selector: 'app-tpdetalletarea',
  templateUrl: './tpdetalletarea.component.html',
  styleUrls: ['./tpdetalletarea.component.css']
})
export class TpdetalletareaComponent implements OnInit {

  constructor(
      private nodeService: TpnodeService,
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
