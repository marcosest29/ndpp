import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-tpperiodicidad',
    templateUrl: './tpperiodicidad.component.html',
    styleUrls: ['./tpperiodicidad.component.css']
})
export class TpperiodicidadComponent implements OnInit {
    @Input()
    tipo: any = 0;

    selectedHora: string[] = [];
    selectedDesde: any;
    selectedCada: any;
    selectedNumeros: string[] = [];
    selectedDias: string[] = [];

    numeros: number[] = [];
 //   hours: string[] = Array.from({length: 24}, (_, i) => i.toString().padStart(2, '0'));
    days: string[] = Array.from({length: 31}, (_, i) => (i + 1).toString().padStart(2, '0'));
    daysOfWeek: string[] = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
   // months: string[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    selectedTab: string = 'tab1';
    @Input()
    dosave = false;

    @Input()
    periodicidad: any = 0;

    constructor() {
        for (let i = 1; i <= 30; i++) {
            this.numeros.push(i);
        }
    }

    ngOnInit(): void {
    }

    selectTab(tab: string) {
        this.selectedTab = tab;
    }

    toggleHora(hour: string) {
        if (this.selectedHora.includes(hour)) {
            // Si la hora ya está seleccionada, quítala del array
            this.selectedHora = this.selectedHora.filter(item => item !== hour);
        } else {
            // Si la hora no está seleccionada, agrégala al array
            this.selectedHora.push(hour);
        }
    }

    toggleDias(hour: string) {
        if (this.selectedNumeros.includes(hour)) {
            // Si la hora ya está seleccionada, quítala del array
            this.selectedNumeros = this.selectedNumeros.filter(item => item !== hour);
        } else {
            // Si la hora no está seleccionada, agrégala al array
            this.selectedNumeros.push(hour);
        }
    } toggleStringDias(hour: string) {
        if (this.selectedDias.includes(hour)) {
            // Si la hora ya está seleccionada, quítala del array
            this.selectedDias = this.selectedDias.filter(item => item !== hour);
        } else {
            // Si la hora no está seleccionada, agrégala al array
            this.selectedDias.push(hour);
        }
    }
    limpiarSeleccionDias(number:any){
        console.log(number);
        if (number === 1) {
            this.selectedCada = null;
        }
        if (number === 2) {
            this.selectedNumeros = [];
        }
        if (number === 3) {
            this.selectedDias = [];
        }
    }
}
