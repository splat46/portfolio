import axios from "axios";

export function signUp(email, password, firstname, lastname, phone) {
  return async function (dispatch, getState) {
    console.log("inside thunk", email, password, firstname, lastname, phone);
    try {
      const response = await axios.post(`http://localhost:5000/signup`, {
        firstName: firstname,
        lastName: lastname,
        phone: phone,
        email: email,
        password: password,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
}
