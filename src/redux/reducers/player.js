import { LOGIN_ACTION, RECEIVE_HASH, SAVE_SCORE } from '../actions';

const INITIAL_STATE = {
  name: '',
  gravatarEmail: '',
  url: '',
  score: 0,
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
  case SAVE_SCORE:
    console.log(action.payload);
    return {
      ...state,
      score: action.payload,
    };
  default:
    return state;
  }
}
export default userReducer;
