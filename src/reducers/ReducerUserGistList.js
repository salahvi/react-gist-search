import {
  FETCH_GIST_LIST_START,
  FETCH_GIST_LIST_SUCCESS,
  FETCH_GIST_LIST_FAILURE
} from "../constants/ActionType";

const initialState = {
  data: "",
  isLoading: false,
  isLoaded: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_GIST_LIST_START:
      return { ...state, isLoading: true, isLoaded: false };
    case FETCH_GIST_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        data: action.payload
      };
    case FETCH_GIST_LIST_FAILURE:
      return { ...state, isLoading: false, isLoaded: false };
    default:
      break;
  }

  return state;
}
