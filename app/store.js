import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import axios from "axios";
import rootReducer, { gotCandiesFromServer } from "./reducers";
import loggingMiddleware from "redux-logger"; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from "redux-thunk"; // https://github.com/gaearon/redux-thunk

// const GOT_CANDIES_FROM_SERVER = "GOT_CANDIES_FROM_SERVER";

// export const gotCandiesFromServer = candies => ({
//   type: GOT_CANDIES_FROM_SERVER,
//   candies
// });

//thunk creator
export const fetchCandies = () => {
  return async dispatch => {
    const response = await axios.get("./api/candies");
    const candies = response.data;
    const action = gotCandiesFromServer(candies);
    dispatch(action);
  };
};

// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case GET_CANDIES:
//       return { ...state, candies: action.candies };
//     default:
//       return state;
//   }
// };

export default createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      // `withExtraArgument` gives us access to axios in our async action creators!
      // https://github.com/reduxjs/redux-thunk#injecting-a-custom-argument
      thunkMiddleware.withExtraArgument({ axios }),
      loggingMiddleware
    )
  )
);
