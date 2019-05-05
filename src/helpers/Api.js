import { API_HOSTNAME } from "../constants/ApiConstants";

export function apiUrl(url) {
  return `${API_HOSTNAME}/${url}`;
}
