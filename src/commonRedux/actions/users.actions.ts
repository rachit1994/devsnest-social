import { SET_USER } from "commonRedux/constants/users.constants";
import { UserInterface } from "commonRedux/reducer/users.reducers";

export const setUser = (user: UserInterface) => ({
  type: SET_USER,
  payload: user,
});
