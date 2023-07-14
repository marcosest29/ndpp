import { Component, OnInit } from '@angular/core';
import { NodeService } from '../nodeservice';
import { MyMsgService } from '../msgservice';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-creartareanueva',
  templateUrl: './creartareanueva.component.html',
  styleUrls: ['./creartareanueva.component.css']
})
export class CreartareanuevaComponent implements OnInit {
  paso:number=1;

  fecini = new Date();
  fecfin = new Date();
  constructor(
    private nodeService: NodeService,
    private mymsgservice: MyMsgService,
    private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.mymsgservice.publishMessage('pantalla-creartarea');

  }

  setpaso(x){
    this.paso=x
  }

  anterior(){
    this.paso=this.paso-1
  }

  siguiente(){
    this.paso=this.paso+1
  }
}
