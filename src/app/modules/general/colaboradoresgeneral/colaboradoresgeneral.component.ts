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
  items2:any[];
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
  gotoDelete(item){
    console.log(item)
    this.items2.push(this.items[item])
    this.items.splice(item,1)
    // this.items.remove(item);
  }

  gotoAdd(item){
    console.log(item)
    this.items.push(this.items2[item])
    this.items2.splice(item,1)
    // this.items.remove(item);
  }

  loadListas(){
    this.nodeService.getColaboradorSantiago().then(est => {
      this.items = est;
    });

    this.nodeService.getColaborador2().then(est => {
      this.items2 = est;
    });
  }
}
