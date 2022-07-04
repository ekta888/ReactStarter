import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./Constants";

const initialState = {
  isAuthenticated: localStorage.getItem("authApp") || false,
  userdata: [],
  user: [{ email: "user@gmail.com", pass: "asdf" }, { email: "usman@gmail.com", pass: "123" }, { email: "ali@gmail.com", pass: "123456" }]
};
// Reducers
const AuthReducer = (state = initialState, action) => {
  // console.log("action",action.type);
  // console.log("actionnewloggedin",action.payload);
  // console.log('456456',localStorage.getItem("token"));
  //  let isauth = (localStorage.getItem("token"))?true:false;
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("token", 'asdfghjkl');
      localStorage.setItem("authApp", true);
      return {
        ...state,
        isAuthenticated: true,
        userdata: action.payload
      };

    case LOGOUT_SUCCESS:
      localStorage.setItem("authApp", false);
      return {
        ...state,
        isAuthenticated: false
      };

    default:
      return state;
  }
};

export default AuthReducer;