import "../../css/style.css"



const Loading =({ loading }) => {
    return (
      loading && (
        <div className="loading-overlay">
          <div className="spinner"></div>
          <p>Cargando...</p>
        </div>
      )
    );
}

export {Loading};