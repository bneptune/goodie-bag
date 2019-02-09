const initialState = {
  candies: []
};

const GOT_CANDIES_FROM_SERVER = "GOT_CANDIES_FROM_SERVER";

export const gotCandiesFromServer = candies => ({
  type: GOT_CANDIES_FROM_SERVER,
  candies
});

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_CANDIES_FROM_SERVER:
      return { ...state, candies: action.candies };
    default:
      return state;
  }
};

export default rootReducer;
