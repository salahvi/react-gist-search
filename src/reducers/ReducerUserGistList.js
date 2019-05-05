import {
  FETCH_GIST_LIST_START,
  FETCH_GIST_LIST_SUCCESS,
  FETCH_GIST_LIST_FAILURE
} from "../constants/ActionType";

const initialState = {
  userGistList: "",
  isLoading: false,
  isLoaded: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_GIST_LIST_START:
      return { ...state, ...action.payload };
    case FETCH_GIST_LIST_SUCCESS:
      return { ...state, ...action.payload.data };
    case FETCH_GIST_LIST_FAILURE:
      return { ...state, isLoading: false, isLoaded: false };
    default:
      break;
  }

  return state;
}
