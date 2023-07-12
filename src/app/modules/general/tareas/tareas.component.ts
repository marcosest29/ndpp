import { Component, OnInit } from '@angular/core';
import { NodeService } from "../nodeservice";
import { MessageService } from "primeng/api";
import { MyMsgService } from "../msgservice";
@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
  formatos: Array<any> = [];
  selectedFormato: any = null;
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
  dateDesde: any = null;
  dateHasta: any = null;
  clasificaciones: Array<any> = [];
  habilitado: Array<any> = [];
  distribucion!: string;

  constructor(
    private nodeService: NodeService,
    private mymsgservice: MyMsgService,
    private messageService: MessageService) {
    this.loadListas();
  }

  ngOnInit():void {
    setTimeout(() => {
      this.mymsgservice.publishMessage('tareas');
    }, 500);

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
    this.nodeService.getClasificaciones().then(clas => {
      this.clasificaciones = clas;
    });
    this.nodeService.getHabilitado().then(hab => {
      this.habilitado = hab;
    });
    
  }
  doSearch() {

  }

}
