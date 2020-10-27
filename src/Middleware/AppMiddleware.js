
/**
 * 
 * appMiddeware will be responsible for handling the API requests. 
 * In this case, we pass the relevant data for the API request through the LOGIN action
 */

import { apiRequest } from "../Actions/api";
import  {LOGIN}  from "../components/auth/auth";

const SERVER_URL = `https://61m46.sse.codesandbox.io`;

export const appMiddleware = () => next => action => {
  next(action);
  switch (action.type) {
    case LOGIN: {
      next(
        apiRequest({
          url: `${SERVER_URL}/login`,
          method: "POST",
          data: action.payload
        })
      );
      break;
    }
    default:
      break;
  }
};
