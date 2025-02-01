import { departamentoModel } from "../models/departamento.model.js";

//PETICIONES HTTP 


// POST-CREAR 

export const crearDepartamento = async (req, res) => {

    //Manejo de errores
    try {

        const {name,codigo_departamento} = req.body;

        const nuevoDepartamento = await departamentoModel.create({
            name,
            codigo_departamento
        });

        //creación exitosa

        return res.status(201).json({
            mensaje: 'Departamento creado correctamente',
            datos: nuevoDepartamento
        });
        
        //error en la creación
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error al crear el departamento',
            problema: error || error.message
        });
        
    }

}

// GET-MOSTRAR 

export const obtenerDepartamentos = async (req, res) => {

    //Manejo de errores

    try {
        
        //buscar en el modelo los departamentos creados
        let departamentos = await departamentoModel.find();


        //caso 1: no hay usuarios registrados

        if(departamentos.length === 0){
            return res.status(200).json({
                mensaje:'Aún no hay departamentos registrados en la base de datos'
            });
        }

        //caso 2: departamentos encontrados
        return res.status(200).json({
            mensaje: 'Se encontraron los siguientes departamentos:',
            numeroDepartamentos: departamentos.length,
            datos: departamentos
        });

        //caso 3: no s pudieron encontrar departamentos
    } catch (error) {
        return res.status(400).json({
            mensaje:'Ocurrio un error, no es posible obtener los departamentos',
            problema: error || error.message
        });
        
    }
}

// PUT-ACTUALIZAR

export const actualizarDepartamento = async (req, res) => {

   
    try {
        let idDeActualizar = req.params.id;
        let infoDeActualizar = req.body;

        const departamentoActualizado = await departamentoModel.findByIdAndUpdate(idDeActualizar, infoDeActualizar);


        //caso 1: no se encontro el departamento x ID
        if(!departamentoActualizado){
            return res.status(404).json({
                mensaje: 'Departamento no encontrado, revisa el id del departamento'
            });
        }

        //Caso 2: actualizacion del departamento
        return res.status(200).json({
            mensaje: 'Se actualizo correctamente el departamento',
            datos: infoDeActualizar
        });

    } catch (error) {
        //Caso 3: ocurrio un error en la actualizacion
        return res.status(400).json({
            mensaje: 'Ocurrio un error al actualizar el departamento',
            error: error || error.message
        });
    }
}