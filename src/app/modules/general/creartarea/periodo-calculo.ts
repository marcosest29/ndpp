import { Component, OnInit } from '@angular/core';
import { NodeService } from "../nodeservice";
import { Router } from '@angular/router';

@Component({
    templateUrl:'./periodo-calculo.html',
})
export class PeriodoCalculoComponent implements OnInit {
    periodocalculoInfo: any;
    submitted: boolean = false;
    desde: any;
    hasta: any;
    distribucion: any[];

    constructor(public nodeService: NodeService, private router: Router) { this.loadListas(); }

    ngOnInit() {
        this.periodocalculoInfo = this.nodeService.getInformacionTarea().periodo;
    }

    nextPage() {
        if (this.periodocalculoInfo.desde && this.periodocalculoInfo.hasta && this.periodocalculoInfo.calculo) {
            this.nodeService.informacionTarea.periodo = this.periodocalculoInfo;
            this.router.navigate(['nuevatarea/colaboradores']);

            return;
        }

        this.submitted = true;
    }
    loadListas() {
        this.nodeService.getDistribucion().then(distribucion => {
          this.distribucion = distribucion;
        });
    }
}