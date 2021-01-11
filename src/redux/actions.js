import * as ACTIONS from "./actionTypes";

export const save = (values) => ({
  type: ACTIONS.SAVE,
  payload: values,
});
