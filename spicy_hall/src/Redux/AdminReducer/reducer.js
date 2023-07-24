import { DELETE_RECIPES_SUCCESS, GET_RECIPES_SUCCESS, RECIPES_FAILURE, RECIPES_REQUEST } from "./actionType"


const initialState = {
    isLoading: false,
    isError: false,
    recipesData: []
}

export const reducer = (state=initialState, {type, payload}) => {
    switch(type){
        case RECIPES_REQUEST: 
            return {...state, isLoading: true}
        case GET_RECIPES_SUCCESS: 
            return {...state, isLoading: false, recipesData: payload}
        case DELETE_RECIPES_SUCCESS: 
            return {...state, isLoading: false, recipesData: payload}
        case RECIPES_FAILURE: 
            return {...state, isLoading: false, isError: true}
        default: 
            return state;
    }
}