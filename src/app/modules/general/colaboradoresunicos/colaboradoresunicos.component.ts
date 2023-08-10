import { Component, OnInit } from '@angular/core';
import {NodeService} from "../nodeservice";
import {MyMsgService} from "../msgservice";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-colaboradoresunicos',
  templateUrl: './colaboradoresunicos.component.html',
  styleUrls: ['./colaboradoresunicos.component.css']
})
export class ColaboradoresunicosComponent implements OnInit {

  filtro:any;
  items:any[];
  constructor(
      private nodeService: NodeService,
      private mymsgservice: MyMsgService,
      private messageService: MessageService) {
    this.loadListas();
  }

  ngOnInit(): void {

  }

  doSearch(){}
  toggleColItem(col: any) {
    col.check = !col.check;
  }

  loadListas(){
    this.nodeService.getColaboradorSantiago().then(est => {
      this.items = est;
    });
  }
}
