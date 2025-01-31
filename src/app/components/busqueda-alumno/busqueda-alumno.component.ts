import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlumnoService } from '../../services/alumno.service';
import { Alumno } from '../../model/alumno';

@Component({
  selector: 'app-busqueda-alumno',
  imports: [FormsModule],
  templateUrl: './busqueda-alumno.component.html',
  styleUrl: './busqueda-alumno.component.css'
})
export class BusquedaAlumnoComponent {

  idbusqueda!:number;

  //a partir del Angular 15
 // alumnoServiceNuevo:AlumnoService = inject(AlumnoService)

  constructor(private alumnoService:AlumnoService)
 {

 } 

  buscarAlumnoPorId()
 {
  //TODO: usar el Alumno service para traerme el alumno del servidor  
  console.log(`buscando alumno por id ${this.idbusqueda}` );
  this.alumnoService.buscarAlumnosPorId(this.idbusqueda).subscribe(
   {
    complete: () =>{
      console.log("La comunicación con el servidor ha terminado");
    } ,
    error:(errorRx:any) =>{
      console.error("La comunicación con el servidor ha terminado MAL "+ errorRx);
    } ,
    next: (alumnoRx:Alumno) =>{
      console.log("Alumno recibido bien " + alumnoRx.nombre + " " + alumnoRx.id);
    } 

   } 
  );

 } 

}
