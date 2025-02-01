import express from "express";
import dotenv from "dotenv";
import { connectionMongo } from "./src/config/database.js";
import mongoose from "mongoose";
import cors from "cors"

import { departamentoRouter } from "./src/routes/departamento.routes.js";
import { empleadoRouter } from "./src/routes/empleados.routes.js";

//configuraciones
const app = express();
dotenv.config();
connectionMongo();
const port = process.env.PORT;

//rutas
app.use(express.json());
app.use('/departamentos', departamentoRouter);
app.use('/empleados', empleadoRouter);



//ejecutar servidor
app.listen(port, ()=>{
    console.log("el servidor se esta ejecutando correctamente en el puerto ", port)
});
