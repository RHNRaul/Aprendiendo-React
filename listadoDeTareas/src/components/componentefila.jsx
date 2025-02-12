const ComponenteFila=({tarea,desc})=>{
    return(             
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">{tarea}</h5>
            <p className="card-text">{desc}</p>
          </div>
        </div>);
}


export default {ComponenteFila}
export {ComponenteFila};