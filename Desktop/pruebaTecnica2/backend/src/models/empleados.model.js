import mongoose from "mongoose";

const empleadosSchema = new mongoose.Schema({
    codigoEmpleado: { type: Number, required: true },
    nombre: { type: String, required: true },
    primerApellido: { type: String, required: true },
    segundoApellido: { type: String, required: true },
    codigoDepartamento: { type: Number, required: true }
});

export const empleadosModel = mongoose.model("empleados", empleadosSchema);
