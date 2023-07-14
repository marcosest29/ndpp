import { Component, OnInit } from '@angular/core';
import { NodeService } from "../nodeservice";
import { Router } from '@angular/router';

@Component({
    selector:'app-filtros',
    templateUrl: './filtros.html',
    styleUrls:['./filtros.css']
})
export class FiltrosComponent implements OnInit {
    filtrosInfo: any;
    submitted: boolean = false;
    division: any[];
    departamento: any[];
    clasificacion: any[];
    clases: any[];
    subclasificacion: any[];

    constructor(public nodeService: NodeService, private router: Router) { this.loadListas(); }

    ngOnInit() {
        this.filtrosInfo = this.nodeService.getInformacionTarea().filtros;
    }

    nextPage() {
        if (this.filtrosInfo.division && this.filtrosInfo.departamento && this.filtrosInfo.clasificacion &&
            this.filtrosInfo.subclasificacion) {
            this.nodeService.informacionTarea.filtros = this.filtrosInfo;
            this.router.navigate(['nuevatarea/periodo-calculo']);
            return;
        }

        this.submitted = true;
    }
    loadListas() {
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
    }
}