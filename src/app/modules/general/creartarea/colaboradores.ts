import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { NodeService } from "../nodeservice";
import { Router } from '@angular/router';

@Component({
    selector:'app-colaboradores',
    templateUrl: './colaboradores.html',
})
export class ColaboradoresComponent implements OnInit, OnChanges {
    colaboradoresInfo: any;
    submitted: boolean = false;
    colaboradores: any[];
    isShowModalColaborators:boolean=false;
    selectedColaborators=[];
    @Input()
    dosave = false;
    constructor(public nodeService: NodeService, private router: Router) { this.loadListas(); }

    ngOnInit() {
        this.colaboradoresInfo = this.nodeService.getInformacionTarea().colaboradores;
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.dosave.currentValue) {
            this.nextPage();
        }
    }
    nextPage() {
        if (this.colaboradoresInfo&&this.colaboradoresInfo.colaborador) {
            this.nodeService.informacionTarea.colaboradores = this.colaboradoresInfo;
        }
        this.submitted = true;
    }
    loadListas() {
        this.nodeService.getColaboradores().then(colaboradores => {
            this.colaboradores = colaboradores;
        });
    }
    showColaborators(){
        // this.selectedColaborator = col;
        this.isShowModalColaborators=true;
    }
    closeViewColaborators(){
        this.isShowModalColaborators=false;
    }

    AddColaborators(){
        this.closeViewColaborators();
        this.selectedColaborators=this.nodeService.informacionTarea.colaboradores;
    }

    toggleColItem(col){

    }
}