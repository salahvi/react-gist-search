import {
  FETCH_GIST_LIST_START,
  FETCH_GIST_LIST_SUCCESS,
  FETCH_GIST_LIST_FAILURE
} from "../constants/ActionType";
import { apiUrl } from "../helpers/Api";
import axios from "axios";

export function fetchUserGistList(username) {
  const url = `users/${username}/gists`;

  return dispatch => {
    dispatch({
      type: FETCH_GIST_LIST_START
    });
    axios
      .get(apiUrl(url))
      .then(response => {
        dispatch({
          type: FETCH_GIST_LIST_SUCCESS,
          payload: response.data
        });
      })
      .catch(err => {
        dispatch({
          type: FETCH_GIST_LIST_FAILURE,
          payload: err.response
        });
      });
  };
}
