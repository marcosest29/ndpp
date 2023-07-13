import { Component, OnInit } from '@angular/core';
import { NodeService } from "../nodeservice";
import { Router } from '@angular/router';

@Component({
    selector:'app-colaboradores',
    templateUrl: './colaboradores.html',
})
export class ColaboradoresComponent implements OnInit {
    colaboradoresInfo: any;
    submitted: boolean = false;
    colaboradores: any[];

    constructor(public nodeService: NodeService, private router: Router) { this.loadListas(); }

    ngOnInit() {
        this.colaboradoresInfo = this.nodeService.getInformacionTarea().colaboradores;
    }

    nextPage() {
        if (this.colaboradoresInfo.colaborador) {
            this.nodeService.informacionTarea.colaboradores = this.colaboradoresInfo;
            this.router.navigate(['nuevatarea/confirmacion']);
            return;
        }
        this.submitted = true;
    }
    loadListas() {
        this.nodeService.getColaboradores().then(colaboradores => {
            this.colaboradores = colaboradores;
        });
    }
}