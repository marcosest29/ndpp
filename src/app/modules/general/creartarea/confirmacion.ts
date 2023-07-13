import { Component, OnInit } from '@angular/core';
import { NodeService } from "../nodeservice";
import { Router } from '@angular/router';

@Component({
    selector:'app-confirmacion',
    templateUrl: './confirmacion.html',
})
export class ConfirmacionComponent implements OnInit {
    informacionTarea: any;
    submitted: boolean = false;


    constructor(public nodeService: NodeService, private router: Router) { }

    ngOnInit() {
        this.informacionTarea=this.nodeService.informacionTarea;
        console.log(this.informacionTarea);
    }

    complete() {
        this.nodeService.complete();
    }

}