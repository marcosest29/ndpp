import { Component, OnInit } from '@angular/core';
import { NodeService } from "../nodeservice";
import { Router } from '@angular/router';

@Component({
    templateUrl:'./locales.html',
})
export class LocalesComponent implements OnInit {
    localInfo: any;

    submitted: boolean = false;

    locales: any[];

    zonas: any[];

    formatos: any[];

    constructor(public nodeService: NodeService, private router: Router) { this.loadListas(); }

    ngOnInit() {
        this.localInfo = this.nodeService.getInformacionTarea().local;
    }

    nextPage() {
        if (this.localInfo.formato && this.localInfo.zona && this.localInfo.locales) {
            this.nodeService.informacionTarea.local = this.localInfo;
            this.router.navigate(['nuevatarea/filtros']);

            return;
        }

        this.submitted = true;
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
    }
}