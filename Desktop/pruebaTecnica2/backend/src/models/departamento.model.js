// Importamos base de datos 
import mongoose from "mongoose";

// Creación del modelo 
const modeloDepartamento = new mongoose.Schema({
    name: { type: String, required: true },
    codigo_departamento: { type: Number, required: true, unique: true }
});

export const departamentoModel = mongoose.model("departamento", modeloDepartamento);
