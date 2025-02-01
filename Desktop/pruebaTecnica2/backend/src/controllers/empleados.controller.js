import { empleadosModel } from "../models/empleados.model.js";

// POST- CREAR 

export const crearEmpleado = async (req, res) => {

  
    try {

        //Establecer los componentes del modelo departamento

        const {codigo_empleado,nombres, primerApellido, segundoApellido, codigo_departamento} = req.body;



        const nuevoEmpleado = await empleadoModel.create({
            codigoEmpleado,
            nombre,
            primerApellido,
            segundoApellido,
            codigoDepartamento
        });

        //mensaje de creación exitosa

        return res.status(201).json({
            mensaje: 'Empleado creado correctamente',
            datos: nuevoEmpleado
        });
        
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error al crear el nuevo empleado',
            problema: error || error.message
        });
        
    }

}

// GET- MOSTRAR

export const obtenerEmpleado = async (req, res) => {



    try {
        
        //Primero debemos encontrar todos los empleados en la base de datos

        let empleados = await empleadoModel.find();

        //caso1:  que no hayan en la base de datos:

        if(empleados.length === 0){
            return res.status(200).json({
                mensaje:'Aún no hay empleados registrados en la base de datos'
            });
        }
        //Caso 2: se encontraron usuarios
        return res.status(200).json({
            mensaje: 'Se encontraron los siguientes empleados:',
            numeroEmpleados: empleados.length,
            datos: empleados
        });
        //caso 3: ocurrio un problema
    } catch (error) {
        return res.status(400).json({
            mensaje:'Ocurrio un error, no es posible obtener los empleados',
            problema: error || error.message
        });
        
    }
}

// PUT- ACTUALIZAR

export const actualizarEmpleado = async (req, res) => {


    try {
        let idDeActualizar = req.params.id;
        let infoDeActualizar = req.body;

        const empleadoActualizado = await empleadosModel.findByIdAndUpdate(idDeActualizar, infoDeActualizar);

      
        if(!empleadoActualizado){
            return res.status(404).json({
                mensaje: 'Empleado no encontrado, valida el id del empleado'
            });
        }

        return res.status(200).json({
            mensaje: 'Se actualizo correctamente el empleado',
            datos: infoDeActualizar
        });

    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error al actualizar el empleado',
            error: error || error.message
        });
    }
}