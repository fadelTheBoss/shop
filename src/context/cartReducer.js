const cartReducer = (state, action) => {
    switch(action.type){
        case 'addToCart':
            return {
                ...state,
                items: [...state.items, action.payload]
            }

        default:
            return state;
    }
};

export default cartReducer;
