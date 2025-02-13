import "../css/style.css";



const Cargando =({ loading }) => {
    return (
      loading && (
        <div className="loading-overlay">
          <div className="spinner"></div>
          <p>Cargando...</p>
        </div>
      )
    );
}

export {Cargando};