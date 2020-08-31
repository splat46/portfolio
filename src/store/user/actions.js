import axios from "axios";

const API_URL = "http://localhost:5000";

const SIGNUP_SUCCESS = "SIGNUP SUCCESS";
function signupSuccess(token) {
  return {
    type: SIGNUP_SUCCESS,
    payload: token,
  };
}
// Thunk to send a request to signUp to the backend
export function signUp(email, password, firstName, lastName) {
  return async function (dispatch, getState) {
    console.log("inside thunk", email, password, firstName, lastName);
    try {
      const response = await axios.post(`${API_URL}/signup`, {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      });
      console.log("RES:", response.data.token);
      const token = response.data.token;
      const action = signupSuccess(token);
      console.log("action:", action);
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };
}

export function signIn(email, password) {
  return async function (dispatch, getState) {
    console.log("inside thunk", email, password);
    try {
      const response = await axios.post(`${API_URL}/login`, {
        email: email,
        password: password,
      });
      console.log("RES:", response);
    } catch (error) {
      console.log(error);
    }
  };
}
