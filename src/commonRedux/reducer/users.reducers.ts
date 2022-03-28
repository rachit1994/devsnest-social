import { Reducer } from 'redux';
import { SET_USER } from "commonRedux/constants/users.constants";

export interface UserInterface {
  name: ''
}

const initialState: UserInterface = { name: '' }

const userReducer: Reducer<UserInterface> = ( state=initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return action.payload;
    default:
      return state
  }
};

export default userReducer;
