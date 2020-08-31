const initialState = {
  token: null,
};

export default function userReducer(state = initialState, action = {}) {
  switch (action.type) {
    case "SIGNUP_SUCCESS":
      return { ...state, token: action.payload };

    default:
      return state;
  }
}
