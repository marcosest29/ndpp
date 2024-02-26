import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {StartComponent} from './modules/general/start/start.component';
import {TareasComponent} from './modules/general/tareas/tareas.component';
import {ReportesComponent} from './modules/general/reportes/reportes.component';
import {InicioComponent} from './modules/general/inicio/inicio.component';
import {CreartareaComponent} from './modules/general/creartarea/creartarea.component';
import {LocalesComponent} from './modules/general/creartarea/locales';
import {FiltrosComponent} from './modules/general/creartarea/filtros';
import {PeriodoCalculoComponent} from './modules/general/creartarea/periodo-calculo';
import {ColaboradoresComponent} from './modules/general/creartarea/colaboradores';
import {ConfirmacionComponent} from './modules/general/creartarea/confirmacion';
import {CreartareanuevaComponent} from './modules/general/creartareanueva/creartareanueva.component';
import {AdmintareaComponent} from './modules/general/admintarea/admintarea.component';
import {DetalletareaComponent} from "./modules/general/detalletarea/detalletarea.component";
import {DetallelocaltareaComponent} from "./modules/general/detallelocaltarea/detallelocaltarea.component";
import {TarealocalComponent} from "./modules/general/tarealocal/tarealocal.component";
import {TarealocaldetalleComponent} from "./modules/general/tarealocaldetalle/tarealocaldetalle.component";
import {TareaprogramadaComponent} from './modules/general/tareaprogramada/tareaprogramada.component';
import {
    CreartareatpnuevaComponent
} from './modules/general/tareaprogramada/creartareatpnueva/creartareatpnueva.component';
import {
    TpdetalletarealocalComponent
} from "./modules/general/tareaprogramada/tpdetalletarealocal/tpdetalletarealocal.component";
import {TpdetalletareaComponent} from "./modules/general/tareaprogramada/tpdetalletarea/tpdetalletarea.component";


const routes: Routes = [
    {path: '', component: StartComponent,},
    {
        path: 'tareas', component: AdmintareaComponent
    }, {
        path: 'periodicidad', component: TareaprogramadaComponent
    }, {
        path: 'detalle-tarea-local', component: DetallelocaltareaComponent
    }, {
        path: 'tp-detalle-tarea-local', component: TpdetalletarealocalComponent
    },
    {
        path: 'detalle-tarea', component: DetalletareaComponent
    }, {
        path: 'tp-detalle-tarea', component: TpdetalletareaComponent
    },
    {
        path: 'reportes', component: ReportesComponent
    },
    {
        path: 'inicio', component: InicioComponent
    },
    {
        path: 'tarealocal', component: TarealocalComponent
    },
    {
        path: 'tarealocaldetalle', component: TarealocaldetalleComponent
    },
    {
        path: 'nuevatarea/:tipo', component: CreartareanuevaComponent,
        children: [
            {path: '', redirectTo: 'local', pathMatch: 'full'},
            {path: 'local', component: LocalesComponent},
            {path: 'filtros', component: FiltrosComponent},
            {path: 'periodo-calculo', component: PeriodoCalculoComponent},
            {path: 'colaboradores', component: ColaboradoresComponent},
            {path: 'confirmacion', component: ConfirmacionComponent}
        ]
    },
    {
        path: 'nuevatareatp/:tipo', component: CreartareatpnuevaComponent,
        children: [
            {path: '', redirectTo: 'local', pathMatch: 'full'},
            {path: 'local', component: LocalesComponent},
            {path: 'filtros', component: FiltrosComponent},
            {path: 'periodo-calculo', component: PeriodoCalculoComponent},
            {path: 'colaboradores', component: ColaboradoresComponent},
            {path: 'confirmacion', component: ConfirmacionComponent}
        ]
    }];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
