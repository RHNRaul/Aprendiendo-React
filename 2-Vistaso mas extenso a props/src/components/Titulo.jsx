import PropTypes from "prop-types";

export const Titulo = ({usuario})=>{
return <h1>{usuario}</h1>
};

Titulo.propTypes = {
    usuario:PropTypes.string.isRequired
}