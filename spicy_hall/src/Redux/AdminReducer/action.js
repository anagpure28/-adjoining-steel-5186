import axios from "axios";
import { url } from "../../Url";
import { DELETE_RECIPES_SUCCESS, GET_RECIPES_SUCCESS, RECIPES_FAILURE, RECIPES_REQUEST } from "./actionType"


// GET RECIPES
export const getRecipes = (data) => (dispatch) => {
    dispatch({type: RECIPES_REQUEST})
    axios.get(`${url}/recipes`,data).then((res)=> {
        dispatch({type: GET_RECIPES_SUCCESS, payload: res.data})
    }).catch((err)=> {
        dispatch({type: RECIPES_FAILURE})
    })
}


export const deleteRecipes = (id) => (dispatch) => {
    dispatch({type: RECIPES_REQUEST})

    let payload = []
    axios.get(`${url}/recipes`,data).then((res)=> {
        payload = res.data.filter((el)=> el.id != id)
        dispatch(getRecipes(payload))
    })

    return axios.delete(`${url}/recipes/${id}`).then((res) => {
        dispatch({type: DELETE_RECIPES_SUCCESS, payload})
    }).catch((err) => {
        dispatch({type: RECIPES_FAILURE})
    })
}
