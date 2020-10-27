/**
 * Core.Js  
 * 
 * in the coreMiddleware, we catch the API_REQUEST action and make the network request 
 * using the axios HTTP library.
 * 
 * */ 
import axios from "axios";
import { API_REQUEST, apiError, apiSuccess } from "../Actions/api";
import { setLoader } from "../Actions/ui";

export const apiMiddleware = ({ dispatch }) => next => action => {
  next(action);

  if (action.type === API_REQUEST) {
    dispatch(setLoader(true));
    const { url, method, data } = action.meta;
    axios({
      method,
      url,
      data
    })
      .then(({ data }) => dispatch(apiSuccess({ response: data })))
      .catch(error => {
        console.log(error);
        dispatch(apiError({ error: error.response.data }));
      });
  }
};