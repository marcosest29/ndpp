import { Component, OnInit } from '@angular/core';
import { NodeService } from '../nodeservice';
import { MyMsgService } from '../msgservice';
import { MessageService } from 'primeng/api';
import {Router} from "@angular/router";

@Component({
  selector: 'app-admintarea',
  templateUrl: './admintarea.component.html',
  styleUrls: ['./admintarea.component.css']
})
export class AdmintareaComponent implements OnInit {

  constructor(
    private nodeService: NodeService,
    private mymsgservice: MyMsgService,
    private router: Router,
    private messageService: MessageService) {
    this.loadListas();
  }

  ngOnInit(): void {
    this.mymsgservice.publishMessage('pantalla-inicio');
  }
  codtarea:any;
  estado:any;
  finicio:any;
  ffin:any;
  tipocalculo:any;
  calculos:any[];
  tareas:any[];

  doSearch(){
    this.nodeService.getTareas().then(t => {
      this.tareas = t;
    });
  }

  loadListas(){
    this.nodeService.getDistribucion().then(dist => {
      this.calculos = dist;
    });
  }

  gotoEdit(){
    this.router.navigate(['nuevatarea','2'], {});
  }
  gotoInfo(){
    this.router.navigate(['detalle-tarea-local'], {});
  }

}
