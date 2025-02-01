
import mongoose  from "mongoose";

export async function connectionMongo() {
    //controlar errores con trycatch
    try {
        await mongoose.connect(process.env.DB_LINK);
        console.log ('conexion exitosa con la base de datos'); 

    } catch (error) {
        console.error ('error de conexion' + error);
    }

}

