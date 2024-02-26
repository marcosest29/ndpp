import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TpnodeService {

  constructor(private http: HttpClient) { }

  getFormatos() {
    return this.http.get<any>('assets/files/datostareas.json')
        .toPromise()
        .then(res => <any[]>res.formatos);
  }

  getZonas() {
    return this.http.get<any>('assets/files/datostareas.json')
        .toPromise()
        .then(res => <any[]>res.zonas);
  }

  getLocales() {
    return this.http.get<any>('assets/files/datostareas.json')
        .toPromise()
        .then(res => <any[]>res.locales);
  }

  getLocalesC() {
    return this.http.get<any>('assets/files/datostareas.json')
        .toPromise()
        .then(res => <any[]>res.localescolaboradores);
  }

  getEstadosL() {
    return this.http.get<any>('assets/files/datostareas.json')
        .toPromise()
        .then(res => <any[]>res.estadosL);
  }

  gettareaslocalnuevo() {
    return this.http.get<any>('assets/files/datostareas.json')
        .toPromise()
        .then(res => <any[]>res.tareaslocalnuevo);
  }

  getDivision() {
    return this.http.get<any>('assets/files/datostareas.json')
        .toPromise()
        .then(res => <any[]>res.division);
  }

  getDepartamento() {
    return this.http.get<any>('assets/files/datostareas.json')
        .toPromise()
        .then(res => <any[]>res.departamento);
  }

  getClasificacion() {
    return this.http.get<any>('assets/files/datostareas.json')
        .toPromise()
        .then(res => <any[]>res.clasificacion);
  }

  getSubclasificacion() {
    return this.http.get<any>('assets/files/datostareas.json')
        .toPromise()
        .then(res => <any[]>res.subclasificacion);
  }

  getClasificaciones() {
    return this.http.get<any>('assets/files/datostareas.json')
        .toPromise()
        .then(res => <any[]>res.clasificaciones);
  }

  getHabilitado() {
    return this.http.get<any>('assets/files/datostareas.json')
        .toPromise()
        .then(res => <any[]>res.habilitado);
  }

  getReportes() {
    return this.http.get<any>('assets/files/datostareas.json')
        .toPromise()
        .then(res => <any[]>res.reportes);
  }

  getClases() {
    return this.http.get<any>('assets/files/datostareas.json')
        .toPromise()
        .then(res => <any[]>res.clases);
  }

  getDistribucion() {
    return this.http.get<any>('assets/files/datostareas.json')
        .toPromise()
        .then(res => <any[]>res.distribucion);
  }

  getArticulos() {
    return this.http.get<any>('assets/files/datostareas.json')
        .toPromise()
        .then(res => <any[]>res.articulos);
  }

  getColaboradores() {
    return this.http.get<any>('assets/files/datostareas.json')
        .toPromise()
        .then(res => <any[]>res.colaboradores);
  }

  getTipoColaboradores() {
    return this.http.get<any>('assets/files/datostareas.json')
        .toPromise()
        .then(res => <any[]>res.tipocolaboradores);
  }

  getAdminLocal() {
    return this.http.get<any>('assets/files/datostareas.json')
        .toPromise()
        .then(res => <any[]>res.adminlocal);
  }

  getGenericos() {
    return this.http.get<any>('assets/files/datostareas.json')
        .toPromise()
        .then(res => <any[]>res.genericos);
  }

  getClientes() {
    return this.http.get<any>('assets/files/datostareas.json')
        .toPromise()
        .then(res => <any[]>res.clientes);
  }

  getColaboradorSantiago() {
    return this.http.get<any>('assets/files/datostareas.json')
        .toPromise()
        .then(res => <any[]>res.colaboradorSantiago);
  }
  getColaborador2() {
    return this.http.get<any>('assets/files/datostareas.json')
        .toPromise()
        .then(res => <any[]>res.colaborador2);
  }

  getTareas() {
    return this.http.get<any>('assets/files/datostareas.json')
        .toPromise()
        .then(res => <any[]>res.tareas);
  }
  getTareaslocal() {
    return this.http.get<any>('assets/files/datostareas.json')
        .toPromise()
        .then(res => <any[]>res.tareaslocal);
  }

  getEstados() {
    return this.http.get<any>('assets/files/datostareas.json')
        .toPromise()
        .then(res => <any[]>res.estados);
  }

  informacionTarea = {
    local: {
      formato: null,
      zona: null,
      locales: null
    },
    locales: [],
    filtros: {
      division: null,
      departamento: null,
      clasificacion: null,
      subclassificacion: null,
      clase: null
    },
    periodo: {
      desde: null,
      hasta: null,
      calculo: null
    },
    colaboradores: [],
    cargos:[],
    calculo:{
      tipo:'',
      alta:0,
      media:0,
      baja:0
    }
  };

  private paymentComplete = new Subject<any>();
  complete() {
    this.paymentComplete.next(this.informacionTarea);
  }

  getInformacionTarea() {
    return this.informacionTarea;
  }
}
