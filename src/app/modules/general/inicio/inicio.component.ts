import { Component, OnInit } from '@angular/core';
import { NodeService } from "../nodeservice";
import { MessageService } from "primeng/api";
import { MyMsgService } from "../msgservice";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(
    private nodeService: NodeService,
    private mymsgservice: MyMsgService,
    private messageService: MessageService) {
    this.loadListas();
  }
  formatos: Array<any> = [];
  selectedFormato: any = null;
  clases: Array<any> = [];
  selectedClase: any = null;
  zonas: Array<any> = [];
  selectedZona: any = null;
  locales: Array<any> = [];
  selectedLocales: any = null;
  division: Array<any> = [];
  selectedDivision: any = null;
  departamento: Array<any> = [];
  selectedDepartamento: any = null;
  clasificacion: Array<any> = [];
  selectedClasificacion: any = null;
  subclasificacion: Array<any> = [];
  selectedSubclasificacion: any = null;
  distribucion: Array<any> = [];
  selectedDistribucion: any = null;
  articulos: Array<any> = [];
  ngOnInit(): void {
    this.mymsgservice.publishMessage('pantalla-inicio');
  }

  loadListas() {
    this.nodeService.getFormatos().then(formatos => {
      this.formatos = formatos;
    });
    this.nodeService.getZonas().then(zonas => {
      this.zonas = zonas;
    });
    this.nodeService.getLocales().then(locales => {
      this.locales = locales;
    });
    this.nodeService.getDivision().then(division => {
      this.division = division;
    });
    this.nodeService.getDepartamento().then(departamento => {
      this.departamento = departamento;
    });
    this.nodeService.getClasificacion().then(clasificacion => {
      this.clasificacion = clasificacion;
    });
    this.nodeService.getSubclasificacion().then(subclasificacion => {
      this.subclasificacion = subclasificacion;
    });  
    this.nodeService.getClases().then(clases => {
      this.clases = clases;
    }); 
    this.nodeService.getDistribucion().then(dist => {
      this.distribucion = dist;
    });   
  }
  search(){
    this.nodeService.getArticulos().then(art => {
      this.articulos = art;
    }); 
  }
  gotoEdit(art){

  }

}
