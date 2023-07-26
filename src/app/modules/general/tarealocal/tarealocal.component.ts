import { Component, OnInit } from '@angular/core';
import {NodeService} from "../nodeservice";
import {MyMsgService} from "../msgservice";
import {Router} from "@angular/router";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-tarealocal',
  templateUrl: './tarealocal.component.html',
  styleUrls: ['./tarealocal.component.css']
})
export class TarealocalComponent implements OnInit {

  constructor(
      private nodeService: NodeService,
      private mymsgservice: MyMsgService,
      private router: Router,
      private messageService: MessageService) {
    this.loadListas();
  }

  articulos:any[];
  estados:any[];
  estado:any;
  selectedtareas:any[];
  codbarras:any;
  ngOnInit(): void {
    this.mymsgservice.publishMessage('pantalla-tarealocal');
  }
  doSearch(){
    this.nodeService.gettareaslocalnuevo().then(t => {
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

  gotoDetalle(){
    this.router.navigate(['tarealocaldetalle'], {});
  }
}
