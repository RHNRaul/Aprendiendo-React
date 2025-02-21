
function itemReducer(state,action){
    switch(action.type){
        case "add":
            const articuloExiste = state.find((i)=> i.product.name === action.item.nombre);
            if(articuloExiste){
                const previo ={
                    product:{
                        name:action.item.nombre,
                        description: action.item.description,
                        price: action.item.precio
                    },   
                    cantidad:articuloExiste.cantidad + 1,
                    total:action.item.precio*(articuloExiste.cantidad + 1),
                }
                return([...state.filter((i)=> i.product.name !== action.item.nombre),previo]);
            }else{
                const previo ={
                    product:{
                        name:action.item.nombre,
                        description: action.item.description,
                        price: action.item.precio
                    },   
                    cantidad:1,
                    total:action.item.precio*1,
                }
                return([...state,previo]);
            }
        case "delete":
            return([...state.filter((i)=> i.product.name !== action.item.product.name)]);
        default:
            return state;
    }
}





export {itemReducer}



