import * as ACTION from "./actionTypes";

const initialState = {
  name: "",
  surname: "",
  email: "",
  gender: "",
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case ACTION.SAVE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
