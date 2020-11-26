export const initialState = {
    basket: []
}

//Selector
export const getBasketTotal = (basket) => {
    return basket?.reduce((amount, item) => item.price + amount, 0)//Going to add 'item.price' to 'amount' (amount start in 0) 
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        default:
            return state;
    }
}

export default reducer;