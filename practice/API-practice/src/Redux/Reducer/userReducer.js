import { SET_USER } from "../Actions/actiontype";

const initialState = { user: [] };

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER:
      return { user: payload };
    default:
      return state;
  }
};
