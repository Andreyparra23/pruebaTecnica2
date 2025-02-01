import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { EmpleadoService } from './services/empleados.service';
import { Empleado } from './interfaces/empleados';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  empleados: Empleado[] = [];
  selectedEmpleado: Empleado | null = null;
  editMode: boolean = false;

  constructor(private empleadoService: EmpleadoService) {}

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

