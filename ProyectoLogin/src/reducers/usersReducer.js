const usersReducer = (state = [],action)=>{
    switch(action.type){
        case 'addUser':
            return [...state,{...action.payload,id:new Date().getTime()}];
        case 'removeUser':
            return state.filter(obj=>obj.id !== action.payload);
        case 'updateUser':
            return state.map(u=>{
                if(u.id === action.payload.id){
                    return {
                        ...action.payload
                    }
                }
                    return u;
            })
        default:
            return state;
    }
}

export {usersReducer};