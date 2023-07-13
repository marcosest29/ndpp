import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creartareanueva',
  templateUrl: './creartareanueva.component.html',
  styleUrls: ['./creartareanueva.component.css']
})
export class CreartareanuevaComponent implements OnInit {
  paso:number=1;
  constructor() { }

  ngOnInit(): void {
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
