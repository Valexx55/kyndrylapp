import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-busqueda-alumno',
  imports: [FormsModule],
  templateUrl: './busqueda-alumno.component.html',
  styleUrl: './busqueda-alumno.component.css'
})
export class BusquedaAlumnoComponent {

  idbusqueda!:number;

  buscarAlumnoPorId()
 {
  //TODO: usar el Alumno service para traerme el alumno del servidor  
  console.log(`buscando alumno por id ${this.idbusqueda}` );
 } 

}
