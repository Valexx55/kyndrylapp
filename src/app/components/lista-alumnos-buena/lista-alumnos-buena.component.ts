import { Component, inject, OnInit } from '@angular/core';
import { Observer, delay } from 'rxjs';
import { Alumno } from '../../model/alumno';
import { AlumnoService } from '../../services/alumno.service';
import { DatePipe, NgFor, NgIf, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-lista-alumnos-buena',
  imports: [NgFor, NgIf, UpperCasePipe, DatePipe],
  templateUrl: './lista-alumnos-buena.component.html',
  styleUrl: './lista-alumnos-buena.component.css'
})
export class ListaAlumnosBuenaComponent implements OnInit {

  observerListaAlumnos: Observer<Array<Alumno>>

  listaAlumnos!: Array<Alumno>

  alumnoService: AlumnoService = inject(AlumnoService)

  constructor ()
 {
  this.observerListaAlumnos = {
    complete: () => { console.log("Comunicación completada"); },
    error: (error_rx) => { console.error("Error al consumir el Api web de alumnos " + error_rx) },
    next: (listaAlumnosRx: Array<Alumno>) => {
      listaAlumnosRx.forEach(alumno => {
        console.log(` ID ${alumno.id} NOMBRE ${alumno.nombre} EDAD ${alumno.edad} `);
      })
      this.listaAlumnos = listaAlumnosRx;
    }
  }
 } 
  ngOnInit(): void {
    //aquí llamamos al servicio
    this.alumnoService.listadoAlumnos().subscribe(this.observerListaAlumnos);
  }

}
