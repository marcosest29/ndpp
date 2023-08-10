import { Component, OnInit } from '@angular/core';
import {NodeService} from "../nodeservice";
import {MyMsgService} from "../msgservice";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-colaboradoresgeneral',
  templateUrl: './colaboradoresgeneral.component.html',
  styleUrls: ['./colaboradoresgeneral.component.css']
})
export class ColaboradoresgeneralComponent implements OnInit {

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
  gotoEdit(item){
    console.log(item)
    this.items.splice(item,1)
    // this.items.remove(item);
  }

  loadListas(){
    this.nodeService.getColaboradorSantiago().then(est => {
      this.items = est;
    });
  }
}
