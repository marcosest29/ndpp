import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { NodeService } from "../nodeservice";
import { Router } from '@angular/router';

@Component({
    selector:'app-confirmacion',
    templateUrl: './confirmacion.html',
    styleUrls: ['./confirmacion.css']
})
export class ConfirmacionComponent implements OnInit, OnChanges {
    informacionTarea:any= {};
    submitted: boolean = false;

    @Input()
    doload = false;

    constructor(public nodeService: NodeService, private router: Router) { }

    ngOnInit() {
        console.log(this.informacionTarea);
    }

    complete() {
        this.nodeService.complete();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.doload.currentValue) {
            this.informacionTarea=this.nodeService.informacionTarea;
            console.log("Se carga informacion tarea:", this.informacionTarea);
        }
    }



}