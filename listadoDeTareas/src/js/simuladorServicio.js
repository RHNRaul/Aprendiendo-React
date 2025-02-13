
const resultadoSimulado =[{tarea:'COMER',
    descripcion:'Come a las 2 de manera sana'},{tarea:'EJERCICIO',
        descripcion:'En la tarde haz ejercicio'}];

function delay(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
}

async function obtenerValores(){
    await delay(3000);
    return resultadoSimulado;
}

export {obtenerValores};