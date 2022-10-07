import { LOGIN_ACTION } from '../actions';

const INITIAL_STATE = {
  name: '',
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOGIN_ACTION:
    return {
      ...state,
      ...action.payload,

    };
  default:
    return state;
  }
}
export default userReducer;
