
import { useState, useEffect } from "react";

const Formulario = ({agregar})=>{
    const [formTarea,setFormTarea] = useState({
        tarea:'',
        descripcion:''
    });

    const {tarea,descripcion} = formTarea;

    const onInputChange = ({ target: { name, value } }) => {
        // console.log(name);
        // console.log(value);

        setFormTarea({
            ...formTarea,
            [name]: value
        });
    }
    
    const realizarFormulario = (event)=>{
        event.preventDefault();
        if (tarea.trim().length <= 1) return;
        if (descripcion.trim().length <= 1) return;
        

        agregar(formTarea);

        setFormTarea({
            tarea:'',
            descripcion:''
        });

    };

    return(<><form className="w-50" onSubmit={realizarFormulario}>
                <input
                type="text"
                name="tarea"
                value={tarea}
                placeholder="Nombre de Tarea"
                className="form-control m-3"
                onChange={onInputChange}
                />
                <input
                type="text"
                name="descripcion"
                value={descripcion}
                placeholder="Descripcion de la tarea"
                className="form-control m-3"
                onChange={onInputChange}
                />
            <button
                type="submit"
                className="btn btn-primary m-3">
                Agregar Tarea
            </button>
    </form>
    </>);
}

export default {Formulario};
export {Formulario};