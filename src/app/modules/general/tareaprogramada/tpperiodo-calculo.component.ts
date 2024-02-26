import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {NodeService} from "../nodeservice";
import {Router} from "@angular/router";
import {TpnodeService} from "../tpnode.service";

@Component({
  selector: 'app-tpperiodo-calculo',
  templateUrl: './tpperiodo-calculo.component.html',
  styleUrls: ['./tpperiodo-calculo.component.css']
})
export class TpperiodoCalculoComponent implements OnInit, OnChanges {
  periodocalculoInfo: any;
  submitted: boolean = false;
  desde: any;
  hasta: any;
  distribucion: any[];

  rotacionPorc = {alta: 10, media: 60, baja: 30};
  rotacionDist = {alta: 10, media: 60, baja: 30};
  tipoCalculo = 1;

  @Input()
  dosave = false;

  constructor(public nodeService: TpnodeService, private router: Router) {
    this.loadListas();
  }

  ngOnInit() {
    this.periodocalculoInfo = this.nodeService.getInformacionTarea().periodo;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.dosave.currentValue) {
      this.nextPage();
    }
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

    this.submitted = true;
  }

  loadListas() {
    this.nodeService.getDistribucion().then(distribucion => {
      this.distribucion = distribucion;
    });
  }
}