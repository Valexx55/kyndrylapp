import { Routes } from '@angular/router';
import { ListadoAlumnosComponent } from './components/listado-alumnos/listado-alumnos.component';
import { FormularioAlumnoComponent } from './components/formulario-alumno/formulario-alumno.component';
import { BusquedaAlumnoComponent } from './components/busqueda-alumno/busqueda-alumno.component';

//esto es un array, que establece
//la correspondencia entre
//RUTA/URL local y componente
export const routes: Routes = [
   {path:'alumnos', component: ListadoAlumnosComponent},
  {path:'formulario', component: FormularioAlumnoComponent}, 
  {path:'busqueda', component: BusquedaAlumnoComponent}
];
