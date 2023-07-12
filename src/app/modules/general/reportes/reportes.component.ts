import { Component, OnInit } from '@angular/core';
import { NodeService } from "../nodeservice";
import { MessageService } from "primeng/api";
import { MyMsgService } from "../msgservice";

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {

  constructor(
    private nodeService: NodeService,
    private mymsgservice: MyMsgService,
    private messageService: MessageService) {
    this.loadListas();
  }

  ngOnInit() {
  }

  reportes: Array<any> = [];
  formatos: Array<any> = [];
  selectedFormato: any = null;

  loadListas() {
    this.nodeService.getFormatos().then(formatos => {
      this.formatos = formatos;
    });
  }
  gotoEdit(reportes){

  }

  loadTabla(){
    this.nodeService.getReportes().then(reportes => {
      this.reportes = reportes;
    });
  }
}
