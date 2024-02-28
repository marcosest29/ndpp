import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RpnodeService {
  constructor(private http: HttpClient) { }

  getFormatos() {
    return this.http.get<any>('assets/files/reportes.json')
        .toPromise()
        .then(res => <any[]>res.formatos);
  }
  getZona() {
    return this.http.get<any>('assets/files/reportes.json')
        .toPromise()
        .then(res => <any[]>res.zona);
  }
  getAreaTrabajo() {
    return this.http.get<any>('assets/files/reportes.json')
        .toPromise()
        .then(res => <any[]>res.areaTrabajo);
  }
  getdatos() {
    return this.http.get<any>('assets/files/reportes.json')
        .toPromise()
        .then(res => <any[]>res.datos);
  }
}
