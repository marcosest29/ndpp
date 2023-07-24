import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './modules/general/start/start.component';
import { TareasComponent } from './modules/general/tareas/tareas.component';
import { ReportesComponent } from './modules/general/reportes/reportes.component';
import { InicioComponent } from './modules/general/inicio/inicio.component';
import { CreartareaComponent } from './modules/general/creartarea/creartarea.component';
import { LocalesComponent } from './modules/general/creartarea/locales';
import { FiltrosComponent } from './modules/general/creartarea/filtros';
import { PeriodoCalculoComponent } from './modules/general/creartarea/periodo-calculo';
import { ColaboradoresComponent } from './modules/general/creartarea/colaboradores';
import { ConfirmacionComponent } from './modules/general/creartarea/confirmacion';
import { CreartareanuevaComponent } from './modules/general/creartareanueva/creartareanueva.component';
import { AdmintareaComponent } from './modules/general/admintarea/admintarea.component';
import {DetalletareaComponent} from "./modules/general/detalletarea/detalletarea.component";
import {DetallelocaltareaComponent} from "./modules/general/detallelocaltarea/detallelocaltarea.component";


const routes: Routes = [
{ path: '', component: StartComponent, },
{
  path: 'tareas', component: AdmintareaComponent
},
{
  path: 'detalle-tarea-local', component: DetallelocaltareaComponent
},
{
  path: 'detalle-tarea', component: DetalletareaComponent
},
{
  path: 'reportes', component: ReportesComponent
},
{
  path: 'inicio', component: InicioComponent
},
{
  path: 'nuevatarea/:tipo', component: CreartareanuevaComponent,
  children: [
    { path: '', redirectTo: 'local', pathMatch: 'full' },
    { path: 'local', component: LocalesComponent },
    { path: 'filtros', component: FiltrosComponent },
    { path: 'periodo-calculo', component: PeriodoCalculoComponent },
    { path: 'colaboradores', component: ColaboradoresComponent },
    { path: 'confirmacion', component: ConfirmacionComponent }
]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
