import {
  FETCH_GIST_LIST_START,
  FETCH_GIST_LIST_SUCCESS,
  FETCH_GIST_LIST_FAILURE,
  FETCH_GIST_FORK_SUCCESS,
  FETCH_GIST_FORK_FAILURE
} from "../constants/ActionType";

const initialState = {
  data: "",
  isLoading: false,
  isLoaded: false,
  isGistForkLoaded: false
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
    case FETCH_GIST_FORK_SUCCESS:
      return {
        ...state,
        isGistForkLoaded: true,
        data: addUserForks(state, action)
      };
    case FETCH_GIST_FORK_FAILURE:
      return { ...state, isGistForkLoaded: false };
    default:
      break;
  }

  return state;
}

function addUserForks(state, action) {
  let data = state.data.map(item => {
    if (item.id === action.payload.id && action.payload.data.length > 0) {
      item.forks = action.payload.data.slice(0, 3);
    }
    return item;
  });
  return data;
}
