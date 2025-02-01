import { crearEmpleado } from "../controllers/empleados.controller.js";
import { obtenerEmpleado } from "../controllers/empleados.controller.js";
import { actualizarEmpleado } from "../controllers/empleados.controller.js";

import express from "express";


export const empleadoRouter = express.Router();

empleadoRouter.post('/crear', crearEmpleado);
empleadoRouter.get('/obtener', obtenerEmpleado);
empleadoRouter.put('/actualizar/:id', actualizarEmpleado);