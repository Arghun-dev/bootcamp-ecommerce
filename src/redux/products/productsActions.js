import axios from 'axios';
import { BASE_API } from "../../baseUrl";
import actionTypes from "../actionTypes";

const getProducts = () => {
    return async dispatch => {
        try {
            dispatch({ type: actionTypes.GET_DATA_START });
            const response = await axios.get(`${BASE_API}/products`);
            dispatch({ type: actionTypes.GET_DATA_SUCCESS, payload: response.data })
        } catch (e) {
            console.log(e);
            dispatch({ type: actionTypes.GET_DATA_FAILURE, payload: e })
        }
    }
}

export default {
    getProducts
}