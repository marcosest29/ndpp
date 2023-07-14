import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { NodeService } from "../nodeservice";
import { MyMsgService } from "../msgservice";
@Component({
  selector: 'app-creartarea',
  templateUrl: './creartarea.component.html',
  styleUrls: ['./creartarea.component.css']
})
export class CreartareaComponent implements OnInit {
  tareas: MenuItem[];
  paso:number=0;
  constructor(
    private nodeService: NodeService,
    private mymsgservice: MyMsgService,
    private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.mymsgservice.publishMessage('pantalla-creartarea');
    this.tareas = [
      {
          label: 'Locales',
          routerLink: 'local'
      },
      {
          label: 'Filtros',
          routerLink: 'filtros'
      },
      {
          label: 'Periodo y tipo de calculo',
          routerLink: 'periodo-calculo'
      },
      {
        label: 'Colaboradores',
        routerLink: 'colaboradores'
    },
      {
          label: 'Confirmacion',
          routerLink: 'confirmacion'
      }
  ];
  }



}
