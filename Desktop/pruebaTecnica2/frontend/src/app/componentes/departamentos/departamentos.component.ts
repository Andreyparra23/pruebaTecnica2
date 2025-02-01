import { Component, Inject, OnInit } from '@angular/core';
import { DepartamentoService } from '../../services/departamentos.service';
import { Departamento } from '../../interfaces/departamentos';

@Component({
  selector: 'app-departamento',
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.css']
})
export class DepartamentoComponent implements OnInit {
  departamentos: Departamento[] = [];
  editMode: boolean = false;
  selectedDepartamento: Departamento | null = null;

  constructor(@Inject(DepartamentoService) private departamentoService: DepartamentoService) {
    // Inyección del servicio DepartamentoService
  }

  ngOnInit(): void {
    this.obtenerDepartamentos();
  }

  obtenerDepartamentos() {
    this.departamentoService.getDepartamentos().subscribe((data: Departamento[]) => {
      this.departamentos = data;
    });
  }

  crearDepartamento(departamento: Departamento) {
    this.departamentoService.createDepartamento(departamento).subscribe((data: Departamento) => {
      this.obtenerDepartamentos();  // Actualizamos la lista de departamentos
    });
  }

  actualizarDepartamento(departamento: Departamento) {
    if (this.selectedDepartamento) {
      this.departamentoService.updateDepartamento(this.selectedDepartamento).subscribe((data: Departamento) => {
        this.obtenerDepartamentos();  // Actualizamos la lista de departamentos
      });
    }
  }

  editarDepartamento(departamento: Departamento) {
    this.selectedDepartamento = { ...departamento };
    this.editMode = true;
  }

  cancelarEdicion() {
    this.selectedDepartamento = null;
    this.editMode = false;
  }
}
