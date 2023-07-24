import { Component, OnInit } from '@angular/core';
import { NodeService } from '../nodeservice';
import { MyMsgService } from '../msgservice';
import { MessageService } from 'primeng/api';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-creartareanueva',
  templateUrl: './creartareanueva.component.html',
  styleUrls: ['./creartareanueva.component.css']
})
export class CreartareanuevaComponent implements OnInit {
  paso:number=1;

  fecini = new Date();
  fecfin = new Date();
  tipo:any=0;
  dosave = false;
  constructor(
    private nodeService: NodeService,
    private mymsgservice: MyMsgService,
    private route: ActivatedRoute,
    private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.tipo = +this.route.snapshot.paramMap.get('tipo');
    this.mymsgservice.publishMessage('pantalla-creartarea'+this.tipo);
  }

  setpaso(x){
    this.paso=x
  }

  anterior(){
    this.paso=this.paso-1;
  }

  siguiente(){
    this.paso=this.paso+1;
    this.dosave = true;
    console.log("this.dosave-->", this.dosave);
    setTimeout(()=>{
      this.dosave=false;
      console.log("this.dosave after timeout-->", this.dosave);
    },1000);
  }
}
