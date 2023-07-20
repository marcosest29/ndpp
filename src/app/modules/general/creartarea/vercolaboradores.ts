import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import { NodeService } from "../nodeservice";
import {Router} from "@angular/router";


@Component({
    selector:'app-vercolaboradores',
    templateUrl: './vercolaboradores.html',
})
export class VercolaboradoresComponent implements OnInit, OnChanges {

    colaborators: any = {};
    selectedColaborators:any={};
    allCols:boolean;
    @Output()
    eventoSalida=new EventEmitter<any>()

    ngOnInit() {

    }

    constructor(public nodeService: NodeService) {
        this.loadListas();
    }

    ngOnChanges(changes: SimpleChanges): void {
    }
    loadListas() {
        this.nodeService.getColaboradores().then(colaboradores => {
            this.colaborators = colaboradores;
        });
    }

    toggleAllCols() {
        this.allCols = !this.allCols;
        this.colaborators.forEach(col => {
            col.check = this.allCols;
        });
        this.responseCols();
    }

    toggleColItem(col: any) {
        col.check = !col.check;
        this.responseCols();
    }

    responseCols(){
        let cole = this.colaborators.filter(col => {
            return col.check
        });
        this.nodeService.informacionTarea.colaboradores = cole;
    }
}