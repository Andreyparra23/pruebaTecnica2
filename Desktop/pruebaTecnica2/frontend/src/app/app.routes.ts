import { Routes } from '@angular/router';

//importar componentes de paginas
import { DepartamentoComponent } from './componentes/departamentos/departamentos.component';
import { EmpleadoComponent } from './componentes/empleados/empleados.component';
import { InicioComponent } from './inicio/inicio.component';

export const routes: Routes = [
{path: '', component: InicioComponent, title: 'inicio'},
{path: 'empleados', component: EmpleadoComponent, title:'empleados'},
{path: 'departamentos', component: DepartamentoComponent, title: 'departamentos'}
];
