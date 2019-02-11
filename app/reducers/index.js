const initialState = {
  candies: [],
  count: 0
};

const GOT_CANDIES_FROM_SERVER = "GOT_CANDIES_FROM_SERVER";
const INCREASE_COUNT = "INCREASE_COUNT";
const DECREASE_COUNT = "DECREASE_COUNT";

export const gotCandiesFromServer = candies => ({
  type: GOT_CANDIES_FROM_SERVER,
  candies
});

export const increaseCount = () => ({
  type: INCREASE_COUNT
});

export const decreaseCount = () => ({
  type: DECREASE_COUNT
});

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_CANDIES_FROM_SERVER:
      return { ...state, candies: action.candies };
    case INCREASE_COUNT:
      return { ...state, count: state.count + 1 };
    case DECREASE_COUNT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export default rootReducer;
