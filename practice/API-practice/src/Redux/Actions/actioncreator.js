import { SET_USER } from "./actiontype";

export const setUserAction = (users) => ({
  type: SET_USER,
  payload: users,
});
