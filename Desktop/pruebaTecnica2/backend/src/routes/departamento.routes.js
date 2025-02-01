import { crearDepartamento } from "../controllers/departamento.controller.js";
import { obtenerDepartamentos } from "../controllers/departamento.controller.js";
import { actualizarDepartamento } from "../controllers/departamento.controller.js";

import express from "express";

export const departamentoRouter = express.Router();

departamentoRouter.post('/crear', crearDepartamento);
departamentoRouter.get('/obtener', obtenerDepartamentos);
departamentoRouter.put('/actualizar/:id', actualizarDepartamento);