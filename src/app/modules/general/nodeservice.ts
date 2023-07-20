import { animate } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
    
interface Articulo {
  codbarra: String,
  nomecommerce: String,
  descripcion: String
}

@Injectable()
export class NodeService {

  constructor(private http: HttpClient) { }

  getFormatos() {
    return this.http.get<any>('assets/files/datos.json')
      .toPromise()
      .then(res => <any[]>res.formatos);
  }

  getZonas() {
    return this.http.get<any>('assets/files/datos.json')
      .toPromise()
      .then(res => <any[]>res.zonas);
  }

  getLocales() {
    return this.http.get<any>('assets/files/datos.json')
      .toPromise()
      .then(res => <any[]>res.locales);
  }

  getDivision() {
    return this.http.get<any>('assets/files/datos.json')
      .toPromise()
      .then(res => <any[]>res.division);
  }

  getDepartamento() {
    return this.http.get<any>('assets/files/datos.json')
      .toPromise()
      .then(res => <any[]>res.departamento);
  }

  getClasificacion() {
    return this.http.get<any>('assets/files/datos.json')
      .toPromise()
      .then(res => <any[]>res.clasificacion);
  }

  getSubclasificacion() {
    return this.http.get<any>('assets/files/datos.json')
      .toPromise()
      .then(res => <any[]>res.subclasificacion);
  }

  getClasificaciones() {
    return this.http.get<any>('assets/files/datos.json')
      .toPromise()
      .then(res => <any[]>res.clasificaciones);
  }

  getHabilitado() {
    return this.http.get<any>('assets/files/datos.json')
      .toPromise()
      .then(res => <any[]>res.habilitado);
  }

  getReportes() {
    return this.http.get<any>('assets/files/datos.json')
      .toPromise()
      .then(res => <any[]>res.reportes);
  }

  getClases() {
    return this.http.get<any>('assets/files/datos.json')
      .toPromise()
      .then(res => <any[]>res.clases);
  }

  getDistribucion() {
    return this.http.get<any>('assets/files/datos.json')
      .toPromise()
      .then(res => <any[]>res.distribucion);
  }

  getArticulos() {
    return this.http.get<any>('assets/files/datos.json')
      .toPromise()
      .then(res => <any[]>res.articulos);
  }

  getColaboradores() {
    return this.http.get<any>('assets/files/datos.json')
      .toPromise()
      .then(res => <any[]>res.colaboradores);
  }

  getTareas() {
    return this.http.get<any>('assets/files/datos.json')
      .toPromise()
      .then(res => <any[]>res.tareas);
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
