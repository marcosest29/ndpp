import {Component, OnInit} from '@angular/core';
import {NodeService} from "../nodeservice";
import {Router} from '@angular/router';

@Component({
    selector: 'app-periodo-calculo',
    templateUrl: './periodo-calculo.html',
})
export class PeriodoCalculoComponent implements OnInit {
    periodocalculoInfo: any;
    submitted: boolean = false;
    desde: any;
    hasta: any;
    distribucion: any[];

    rotacionPorc = {alta: 10, media: 60, baja: 30};
    rotacionDist = {alta: 10, media: 60, baja: 30};
    tipoCalculo = 1;

    constructor(public nodeService: NodeService, private router: Router) {
        this.loadListas();
    }

    ngOnInit() {
        this.periodocalculoInfo = this.nodeService.getInformacionTarea().periodo;
    }

    changeTipoCalculo(tipoCalculo) {
        this.tipoCalculo = tipoCalculo;
    }

    nextPage() {

        this.nodeService.informacionTarea.calculo.tipo = this.tipoCalculo === 1 ? 'Porcentaje' : 'Distribución';

        if (this.tipoCalculo === 1) {
            this.nodeService.informacionTarea.calculo.alta = this.rotacionPorc.alta;
            this.nodeService.informacionTarea.calculo.media = this.rotacionPorc.media;
            this.nodeService.informacionTarea.calculo.baja = this.rotacionPorc.baja;
        } else {
            this.nodeService.informacionTarea.calculo.alta = this.rotacionDist.alta;
            this.nodeService.informacionTarea.calculo.media = this.rotacionDist.media;
            this.nodeService.informacionTarea.calculo.baja = this.rotacionDist.baja;
        }
        console.log('periodo:');
        console.log(this.nodeService.informacionTarea);

        this.router.navigate(['nuevatarea/colaboradores']);

        this.submitted = true;
    }

    loadListas() {
        this.nodeService.getDistribucion().then(distribucion => {
            this.distribucion = distribucion;
        });
    }
}