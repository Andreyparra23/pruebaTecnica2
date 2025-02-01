import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Departamento } from '../interfaces/departamentos';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  private apiUrl = 'http://localhost:3000/api/departamentos';  // Asegúrate de que la URL sea la correcta

  constructor(@Inject(HttpClient) private http: HttpClient) { }

  getDepartamentos(): Observable<Departamento[]> {
    return this.http.get<Departamento[]>(`${this.apiUrl}/obtener`);
  }

  createDepartamento(departamento: Departamento): Observable<Departamento> {
    return this.http.post<Departamento>(`${this.apiUrl}/crear`, departamento);
  }

  updateDepartamento(departamento: Departamento): Observable<Departamento> {
    return this.http.put<Departamento>(`${this.apiUrl}/actualizar/${departamento.codigo_departamento}`, departamento);
  }
}
