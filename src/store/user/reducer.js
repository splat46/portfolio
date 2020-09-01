const initialState = {
  token: localStorage.getItem("token"),
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "SIGNUP_SUCCESS":
      return { ...state, token: action.payload };

    case "LOGIN_SUCCESS":
      localStorage.setItem("token", action.payload);

      return { ...state, ...action.payload.token };

    default:
      return state;
  }
}
