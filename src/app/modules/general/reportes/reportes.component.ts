import {Component, HostListener, OnInit} from '@angular/core';
import {MessageService} from "primeng/api";
import {MyMsgService} from "../msgservice";
import {RpnodeService} from "../rpnode.service";

@Component({
    selector: 'app-reportes',
    templateUrl: './reportes.component.html',
    styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {
    shouldShowMessage = false;
    constructor(
        private nodeService: RpnodeService,
        private mymsgservice: MyMsgService,
        private messageService: MessageService) {
        this.loadListas();
    }
    @HostListener('window:scroll', [])
    onScroll(): void {
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        this.shouldShowMessage = scrollPosition > 20; // Cambia 20 por la cantidad de píxeles que desees
    }

    ngOnInit() {
        this.mymsgservice.publishMessage('pantalla-reporte');
    }

    finicio: any=null;
    ffin: any=null;
    reportes: Array<any> = [];

    formatos: Array<any> = [];
    zona: Array<any> = [];
    areaTrabajo: Array<any> = [];

    selectedFormato: any = null;
    selectedZona: any = null;
    selectedAreaTrabajo: any = null;


    loadListas() {
        this.nodeService.getFormatos().then(formatos => {
            this.formatos = formatos;
        });
        this.nodeService.getZona().then(zona => {
            this.zona = zona;
        });
        this.nodeService.getAreaTrabajo().then(areaTrabajo => {
            this.areaTrabajo = areaTrabajo;
        });
        console.log(this.zona)
    }

    loadTabla() {
        console.log(this.ffin)
        console.log(this.finicio)
        if (this.finicio == null && this.ffin == null) {
            this.mostrarMensaje('Ingrese fechas')
        } else {
            this.nodeService.getdatos().then(reportes => {
                this.reportes = reportes;
            });
        }
    }

    mensaje: string = '';

    mostrarMensaje(mensaje: string) {
        this.mensaje = mensaje;

        setTimeout(() => {
            this.ocultarMensaje();
        }, 2000);
    }

    ocultarMensaje() {
        this.mensaje = '';
    }
}
