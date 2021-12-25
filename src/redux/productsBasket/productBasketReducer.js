import actionTypes from "../actionTypes"

const initialState = {
    selectedProducts: []
}

export const productBasketReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_TO_BASKET:
            return {...state, selectedProducts: [...state.selectedProducts, action.payload]}
        default: return state;
    }
}