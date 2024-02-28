import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MyMsgService } from './modules/general/msgservice';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './modules/general/start/start.component';
import { TareasComponent } from './modules/general/tareas/tareas.component';
import { ReportesComponent } from './modules/general/reportes/reportes.component';
import { MessageService } from 'primeng/api';
import {DialogModule} from 'primeng/dialog';
import {ContextMenuModule} from 'primeng/contextmenu';
import { PaginatorModule } from 'primeng/paginator';
import { RadioButtonModule } from 'primeng/radiobutton';
import {GalleriaModule} from 'primeng/galleria';
import { HttpClientModule } from '@angular/common/http';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {MultiSelectModule} from 'primeng/multiselect';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FileUploadModule } from 'primeng/fileupload';
import { FormsModule } from '@angular/forms';
import {TreeModule} from 'primeng/tree';
import {ToastModule} from 'primeng/toast';
import { NodeService } from './modules/general/nodeservice';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { InicioComponent } from './modules/general/inicio/inicio.component';
import { FieldsetModule } from 'primeng/fieldset';
import { CreartareaComponent } from './modules/general/creartarea/creartarea.component';
import { StepsModule } from 'primeng/steps';
import { CardModule } from 'primeng/card';
import { LocalesComponent } from './modules/general/creartarea/locales';
import { FiltrosComponent } from './modules/general/creartarea/filtros';
import { PeriodoCalculoComponent } from './modules/general/creartarea/periodo-calculo';
import { ColaboradoresComponent } from './modules/general/creartarea/colaboradores';
import { ConfirmacionComponent } from './modules/general/creartarea/confirmacion';
import { MenuModule } from 'primeng/menu';
import { CreartareanuevaComponent } from './modules/general/creartareanueva/creartareanueva.component';
import { KFieldsetComponent } from './modules/general/k-fieldset/k-fieldset.component';
import { AdmintareaComponent } from './modules/general/admintarea/admintarea.component';
import { DetalletareaComponent } from './modules/general/detalletarea/detalletarea.component';
import {VercolaboradoresComponent} from "./modules/general/creartarea/vercolaboradores";
import { DetallelocaltareaComponent } from './modules/general/detallelocaltarea/detallelocaltarea.component';
import { TarealocalComponent } from './modules/general/tarealocal/tarealocal.component';
import { TarealocaldetalleComponent } from './modules/general/tarealocaldetalle/tarealocaldetalle.component';
import { ColaboradoresunicosComponent } from './modules/general/colaboradoresunicos/colaboradoresunicos.component';
import { ColaboradoresgeneralComponent } from './modules/general/colaboradoresgeneral/colaboradoresgeneral.component';
import { TareaprogramadaComponent } from './modules/general/tareaprogramada/tareaprogramada.component';
import { CreartareatpnuevaComponent } from './modules/general/tareaprogramada/creartareatpnueva/creartareatpnueva.component';
import { TpcolaboradoresComponent } from './modules/general/tareaprogramada/tpcolaboradores.component';
import { TpconfirmacionComponent } from './modules/general/tareaprogramada/tpconfirmacion.component';
import { TpfiltrosComponent } from './modules/general/tareaprogramada/tpfiltros.component';
import { TplocalesComponent } from './modules/general/tareaprogramada/tplocales.component';
import { TpvercolaboradoresComponent } from './modules/general/tareaprogramada/tpvercolaboradores.component';
import { TpperiodoCalculoComponent } from './modules/general/tareaprogramada/tpperiodo-calculo.component';
import { TpperiodicidadComponent } from './modules/general/tareaprogramada/tpperiodicidad.component';
import { TpdetalletarealocalComponent } from './modules/general/tareaprogramada/tpdetalletarealocal/tpdetalletarealocal.component';
import { TpdetalletareaComponent } from './modules/general/tareaprogramada/tpdetalletarea/tpdetalletarea.component';
import { ModalComponentComponent } from './modules/modal-component/modal-component.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    TareasComponent,
    ReportesComponent,
    InicioComponent,
    CreartareaComponent,
    LocalesComponent,
    FiltrosComponent,
    PeriodoCalculoComponent,
    ColaboradoresComponent,
    ConfirmacionComponent,
    CreartareanuevaComponent,
    KFieldsetComponent,
    AdmintareaComponent,
    DetalletareaComponent,
    VercolaboradoresComponent,
    DetallelocaltareaComponent,
    TarealocalComponent,
    TarealocaldetalleComponent,
    ColaboradoresunicosComponent,
    ColaboradoresgeneralComponent,
    TareaprogramadaComponent,
    CreartareatpnuevaComponent,
    TpcolaboradoresComponent,
    TpconfirmacionComponent,
    TpfiltrosComponent,
    TplocalesComponent,
    TpvercolaboradoresComponent,
    TpperiodoCalculoComponent,
    TpperiodicidadComponent,
    TpdetalletarealocalComponent,
    TpdetalletareaComponent,
    ModalComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DropdownModule,
    BrowserAnimationsModule,
    DropdownModule,
    FormsModule,
    TreeModule,
    ToastModule,
    TableModule,
    DialogModule,
    ContextMenuModule,
    MultiSelectModule,
    FileUploadModule,
    PaginatorModule,
    GalleriaModule,
    RadioButtonModule,
    CalendarModule,
    CheckboxModule,
    FieldsetModule,
    StepsModule,
    CardModule,
    MenuModule
  ],
  
  providers: [NodeService,MessageService,MyMsgService],
  bootstrap: [AppComponent]
})
export class AppModule { }
