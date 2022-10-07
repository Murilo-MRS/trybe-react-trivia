// export const REQUEST_API = 'REQUEST_API';
// export const RECEIVE_API = 'RECEIVE_API';
// // export const FAILED_REQUEST = 'FAILED_REQUEST';
// const url =
// function getToken(payload) {
//   return { type: RECEIVE_API, payload };
// }

// export const fetchApiAction = () => async (dispatch) => {
//   const response = await fetch(url);

//   const result = await response.json();

//   dispatch(getToken(result));
// };

export const LOGIN_ACTION = 'LOGIN_ACTION';

export const loginAction = (payload) => ({
  type: LOGIN_ACTION,
  payload,
});
