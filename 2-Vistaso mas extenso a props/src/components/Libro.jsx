export const LibroInfo = ({libro})=>{
    console.log(libro.titulo);
    return(
        <>
        <h2>{libro.titulo}</h2>
        <p>{libro.desc}</p>
        </>
    );
}
