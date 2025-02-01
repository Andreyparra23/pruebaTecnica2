import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Para manejar las solicitudes HTTP
import { Observable } from 'rxjs';  // Para manejar las respuestas asíncronas
import { Empleado } from '../interfaces/empleados';
@Injectable({
  providedIn: 'root'  // Esto asegura que el servicio esté disponible a nivel global en la aplicación
})
export class EmpleadoService {
  // Definimos la URL de la API del backend para los empleados
  private apiUrl = 'http://localhost:3000/api/empleados';

  constructor(private http: HttpClient) { }

  // Método para obtener todos los empleados
  getEmpleados(): Observable<Empleado[]> {
    return this.http.get<Empleado[]>(this.apiUrl + '/obtener');  // Ajuste para la ruta de obtener empleados
  }

  // Método para crear un empleado
  createEmpleado(empleado: Empleado): Observable<Empleado> {
    return this.http.post<Empleado>(this.apiUrl + '/crear', empleado);  // Ruta de creación de empleado
  }

  // Método para actualizar un empleado
  updateEmpleado(empleado: Empleado): Observable<Empleado> {
    return this.http.put<Empleado>(`${this.apiUrl}/actualizar/${empleado.codigo}`, empleado);  // Ruta para actualizar
  }
  

  // Puedes agregar más métodos para eliminar empleados, obtener un solo empleado, etc., si es necesario.
}
