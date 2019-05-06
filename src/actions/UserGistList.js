import {
  FETCH_GIST_LIST_START,
  FETCH_GIST_LIST_SUCCESS,
  FETCH_GIST_LIST_FAILURE,
  FETCH_GIST_FORK_SUCCESS,
  FETCH_GIST_FORK_FAILURE
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
          payload: { data: response.data, username }
        });
      })
      .catch(err => {
        const response =
          err.response.status === 404
            ? "Gist user not found!"
            : " Gists Failed to Load, Please try again later!";
        dispatch({
          type: FETCH_GIST_LIST_FAILURE,
          payload: { error: response, username }
        });
      });
  };
}

export function fetchGitForks(id) {
  const url = `gists/${id}/forks`;
  return dispatch => {
    axios
      .get(apiUrl(url))
      .then(response => {
        dispatch({
          type: FETCH_GIST_FORK_SUCCESS,
          payload: { data: response.data, id }
        });
      })
      .catch(err => {
        dispatch({
          type: FETCH_GIST_FORK_FAILURE,
          payload: {
            error: "Gist forks Failed to Load, Please try again later!"
          }
        });
      });
  };
}
