import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {NodeService} from "../nodeservice";
import {Router} from '@angular/router';
import {Inplace} from "primeng/inplace";

@Component({
    selector: 'app-locales',
    templateUrl: './locales.html',
    styleUrls: ['./locales.css']
})
export class LocalesComponent implements OnInit, OnChanges {

    localInfo: any;

    submitted: boolean = false;

    locales: any[];

    zonas: any[];

    formatos: any[];

    allLocal = false;

    @Input()
    dosave = false;

    @Input()
    tipo:any=0;

    constructor(public nodeService: NodeService, private router: Router) {
        this.loadListas();
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log("locales changes-->", changes);
        if (changes.dosave.currentValue) {
            this.nextPage();
            console.log("Se ejecuto nextPage locales");
        }
    }

    ngOnInit() {
        this.localInfo = this.nodeService.getInformacionTarea().local;
    }

    toggleAllLocal() {
        this.allLocal = !this.allLocal;
        this.locales.forEach(loc => {
            loc.check = this.allLocal;
        });
    }

    toggleLocalItem(local: any) {
        local.check = local.check ? false : true;
    }

    nextPage() {
        let locales = this.locales.filter(local => {
            return local.check
        });
        this.nodeService.informacionTarea.locales = locales;
        this.submitted = true;
    }

    loadListas() {
        this.nodeService.getFormatos().then(formatos => {
            this.formatos = formatos;
        });
        this.nodeService.getZonas().then(zonas => {
            this.zonas = zonas;
        });
        this.nodeService.getLocales().then(locales => {
            this.locales = locales;
        });
    }
}