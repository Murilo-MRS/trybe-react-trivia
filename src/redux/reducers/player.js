import { LOGIN_ACTION, RECEIVE_HASH } from '../actions';

const INITIAL_STATE = {
  name: '',
  gravatarEmail: '',
  url: '',
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOGIN_ACTION:
    return {
      ...state,
      name: action.payload.name,
      gravatarEmail: action.payload.email,
    };
  case RECEIVE_HASH:
    return {
      ...state,
      url: `https://www.gravatar.com/avatar/${action.payload}`,
    };
  default:
    return state;
  }
}
export default userReducer;
