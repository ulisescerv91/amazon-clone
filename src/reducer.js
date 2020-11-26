export const initialState = {
    basket: []
}

//Selector
export const getBasketTotal = (basket) => {
    return basket?.reduce((amount, item) => item.price + amount, 0)//Going to add 'item.price' to 'amount' (amount start in 0) 
}

const reducer = (state, action) => {
    //State -> intern data
    //Action -> data from component

    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                basketItem => basketItem.id === action.id
            )//Find the first one and return it

            let newBasket = [...state.basket];//Copy of the basket

            //If indes >= 0 mean found item in the basket
            if (index >= 0) {
                newBasket.splice(index, 1)//Remove the item from the array
                //! This method changes the original array

            } else {
                console.warn(`Cant remove product (id: ${action.id}) as its not in basket!`)
            }

            return {
                ...state,
                basket: newBasket
            }

        default:
            return state;
    }
}

export default reducer;