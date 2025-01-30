import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Alumno } from '../model/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  //aquí hacemos las conexiones por HTTP al servidor
  constructor(private httpClient:HttpClient) { 
    //this.httpClient.
  }


  buscarAlumnosPorId(id:number)
 {
    this.httpClient.get<Alumno>("http://localhost:9090/api/alumnos/"+id)
 } 
}
