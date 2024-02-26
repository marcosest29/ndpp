import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {TpnodeService} from "../tpnode.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tpcolaboradores',
  templateUrl: './tpcolaboradores.component.html',
  styleUrls: ['./tpcolaboradores.component.css']
})
export class TpcolaboradoresComponent implements OnInit {
  colaboradoresInfo: any;
  submitted: boolean = false;
  colaboradores: any[];
  tipocolaboradores: any[];
  isShowModalColaborators:boolean=false;
  selectedColaborators=[];
  selectedColaboratorsTable=[];
  adminlocal=[];
  genericos=[];
  clientes=[];
  filtro:any;
  filtro2:any;
  filtrolocales:any;
  locales=[];
  asignacion:any;
  aplica:any;
  colaboradoresSeleccionados=[];

  @Input()
  dosave = false;
  constructor(public nodeService: TpnodeService, private router: Router) { this.loadListas(); }

  ngOnInit() {
    this.colaboradoresInfo = this.nodeService.getInformacionTarea().colaboradores;
    this.selectedColaboratorsTable=[{
      tipo: "Colaboradores",
      nombre: "BODEGUERO"
    },
      {
        tipo: "Colaboradores",
        nombre: "CAJEROS"
      }];
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.dosave.currentValue) {
      this.nextPage();
    }
  }
  nextPage() {
    console.log(this.colaboradoresInfo)
    if (this.colaboradoresInfo&&this.colaboradoresInfo.colaborador) {
      this.nodeService.informacionTarea.colaboradores = this.colaboradoresInfo;
    }
    this.submitted = true;
  }
  loadListas() {
    this.nodeService.getColaboradores().then(colaboradores => {
      this.colaboradores = colaboradores;
    });
    this.nodeService.getTipoColaboradores().then(colaboradores => {
      this.tipocolaboradores = colaboradores;
    });
    this.nodeService.getAdminLocal().then(colaboradores => {
      this.adminlocal = colaboradores;
    });
    this.nodeService.getGenericos().then(colaboradores => {
      this.genericos = colaboradores;
    });
    this.nodeService.getClientes().then(colaboradores => {
      this.clientes = colaboradores;
    });
    this.nodeService.getLocalesC().then(loc => {
      this.locales = loc;
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
    this.selectedColaboratorsTable=this.selectedColaborators;
    this.selectedColaboratorsTable.forEach(col => {
      col.check = false;
    });
  }

  toggleColItem(col){
    col.check = !col.check;
    // this.nodeService.informacionTarea.colaboradores = this.selectedColaboratorsTable.filter(col => {
    //     return col.check
    // });
    let x = this.colaboradores.filter(col => {
      return col.check
    });
    let y = this.adminlocal.filter(col => {
      return col.check
    });
    let z = this.genericos.filter(col => {
      return col.check
    });
    let w = this.clientes.filter(col => {
      return col.check
    });
    if (x.length>0){
      this.nodeService.informacionTarea.cargos=x
    }
    if (y.length>0){
      this.nodeService.informacionTarea.cargos=y
    }
    if (z.length>0){
      this.nodeService.informacionTarea.cargos=z
    }
    if (w.length>0){
      this.nodeService.informacionTarea.cargos=w
    }
    // console.log(x,y,z,w)
    // console.log(this.nodeService.informacionTarea.cargos)
  }

  doSearch(){

  }

  add(){
    this.colaboradoresSeleccionados = this.adminlocal.filter(col => {
      return col.check
    });
    console.log(this.colaboradoresSeleccionados)
  }

  delete(item){
    this.colaboradoresSeleccionados.splice(item,1)
  }
}
