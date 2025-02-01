import { Component, Inject, OnInit } from '@angular/core';
import { EmpleadoService } from '../../services/empleados.service';
import { Empleado } from '../../interfaces/empleados';
@Component({
  selector: 'app-empleado',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadoComponent implements OnInit {
  empleados: Empleado[] = [];
  selectedEmpleado: Empleado | null = null;
  editMode: boolean = false;

  constructor(@Inject(EmpleadoService) private empleadoService: EmpleadoService) {}

  ngOnInit() {
    this.obtenerEmpleados();
  }

  obtenerEmpleados() {
    this.empleadoService.getEmpleados().subscribe((empleados: Empleado[]) => {
      this.empleados = empleados;
    });
  }

  agregarEmpleado() {
    if (this.selectedEmpleado) {
      this.empleadoService.createEmpleado(this.selectedEmpleado).subscribe(() => {
        this.obtenerEmpleados();
      });
    }
  }

  actualizarEmpleado(empleado: Empleado) {
    this.empleadoService.updateEmpleado(empleado).subscribe(() => {
      this.obtenerEmpleados();
    });
  }
}
