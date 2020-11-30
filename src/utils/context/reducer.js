import { IS_LOADING } from "./types";

const setIsLoading = (state, action) => {
  return {
    ...state,
    is_loading: action.payload,
  };
};

export const reducer = (state, action) => {
  switch (action.type) {
    case IS_LOADING:
      return setIsLoading(state, action);
    default:
      return state;
  }
};
