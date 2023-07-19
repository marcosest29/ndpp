import { Component, OnInit } from '@angular/core';
import { NodeService } from '../nodeservice';
import { MyMsgService } from '../msgservice';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-admintarea',
  templateUrl: './admintarea.component.html',
  styleUrls: ['./admintarea.component.css']
})
export class AdmintareaComponent implements OnInit {

  constructor(
    private nodeService: NodeService,
    private mymsgservice: MyMsgService,
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

  }

}
