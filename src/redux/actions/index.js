// import md5 from 'crypto-js/md5';

export const LOGIN_ACTION = 'LOGIN_ACTION';
export const RECEIVE_HASH = 'RECEIVE_HASH';
export const RECEIVE_QUESTION = 'RECEIVE_QUESTION';
export const FAIL_REQUEST = 'FAIL_REQUEST';

export const loginAction = (payload) => ({
  type: LOGIN_ACTION,
  payload: {
    name: payload.name,
    email: payload.email,
  },
});

export const getAvatar = (payload) => ({ type: RECEIVE_HASH,
  payload,
});
