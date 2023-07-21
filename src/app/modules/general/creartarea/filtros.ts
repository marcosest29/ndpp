import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { NodeService } from "../nodeservice";
import { Router } from '@angular/router';
interface UploadEvent {
    originalEvent: Event;
    files: File[];
}
@Component({
    selector:'app-filtros',
    templateUrl: './filtros.html',
    styleUrls:['./filtros.css']
})
export class FiltrosComponent implements OnInit, OnChanges {
    filtrosInfo: any;
    submitted: boolean = false;
    division: any[];
    departamento: any[];
    clasificacion: any[];
    clases: any[];
    subclasificacion: any[];
    tipoCalculo = 1;

    @Input()
    dosave = false;

    constructor(public nodeService: NodeService, private router: Router) { this.loadListas(); }

    ngOnInit() {
        this.filtrosInfo = this.nodeService.getInformacionTarea().filtros;
    }

    nextPage() {
        if (this.filtrosInfo&&this.filtrosInfo.division && this.filtrosInfo.departamento && this.filtrosInfo.clasificacion &&
            this.filtrosInfo.subclasificacion) {
            this.nodeService.informacionTarea.filtros = this.filtrosInfo;
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

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.dosave.currentValue) {
            this.nextPage();
        }
    }
    onUpload(event: UploadEvent) {
        // this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
    }
}