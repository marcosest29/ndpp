import {Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {NodeService} from "../nodeservice";
import {TpnodeService} from "../tpnode.service";

@Component({
  selector: 'app-tpvercolaboradores',
  templateUrl: './tpvercolaboradores.component.html',
  styleUrls: ['./tpvercolaboradores.component.css']
})
export class TpvercolaboradoresComponent implements OnInit, OnChanges {

  colaborators: any = {};
  selectedColaborators:any={};
  allCols:boolean;
  @Output()
  eventoSalida=new EventEmitter<any>()

  ngOnInit() {

  }

  constructor(public nodeService: TpnodeService) {
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