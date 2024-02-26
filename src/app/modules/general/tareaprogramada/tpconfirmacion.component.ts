import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {NodeService} from "../nodeservice";
import {Router} from "@angular/router";
import {TpnodeService} from "../tpnode.service";

@Component({
  selector: 'app-tpconfirmacion',
  templateUrl: './tpconfirmacion.component.html',
  styleUrls: ['./tpconfirmacion.component.css']
})
export class TpconfirmacionComponent implements OnInit , OnChanges {
  informacionTarea: any = {};
  submitted: boolean = false;

  @Input()
  doload = false;

  constructor(public nodeService: TpnodeService, private router: Router) {
  }

  ngOnInit() {
    console.log(this.informacionTarea);
  }

  complete() {
    this.nodeService.complete();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.doload.currentValue) {
      this.informacionTarea = this.nodeService.informacionTarea;
      console.log("Se carga informacion tarea:", this.informacionTarea);
    }
  }


}
