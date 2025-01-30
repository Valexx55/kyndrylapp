import { Component, OnDestroy, OnInit } from '@angular/core';
import { Alumno } from '../../model/alumno';

@Component({
  selector: 'app-listado-alumnos',
  imports: [],
  templateUrl: './listado-alumnos.component.html',
  styleUrl: './listado-alumnos.component.css'
})
export class ListadoAlumnosComponent implements OnInit, OnDestroy
 {

  alumno:Alumno;

  constructor()
 {
  console.log("Estoy en el constructor ListadoAlumnosComponent");
  //TODO: traer los alumnos y mostrarlos
  this.alumno = new Alumno();
  this.alumno.id = 5;
  this.alumno.nombre = 'Jessica';
  this.alumno.apellido = 'López';
  this.alumno.edad = 45;


 } 

 ngOnInit(): void {
  console.log("Estoy en el ngOnInit ListadoAlumnosComponent");
}

  ngOnDestroy(): void {
    console.log("Estoy en el ngOnDestroy ListadoAlumnosComponent");
  }
 
  tocarCambio ()
 {
  console.log("Ha tocado el boton de cambio");
  this.alumno.edad = 46;
 } 

}
