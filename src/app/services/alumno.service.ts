import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Alumno } from '../model/alumno';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  //aquí hacemos las conexiones por HTTP al servidor
  constructor(private httpClient:HttpClient) { 
    //this.httpClient.
  }


  buscarAlumnosPorId(id:number):Observable<Alumno>
 {
    //return this.httpClient.get<Alumno>("http://localhost:9090/api/alumnos/"+id);
    return this.httpClient.get<Alumno>("http://localhost:33333/alumno/"+id);
 } 


 listadoAlumnos():Observable<Array<Alumno>>
 {
    //return this.httpClient.get<Alumno>("http://localhost:9090/api/alumnos/"+id);
    return this.httpClient.get<Array<Alumno>>("http://localhost:33333/alumno");
 } 
}
