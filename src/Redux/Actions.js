import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./Constants";

export const getLogin = (logged_in_user) => {
  console.log("called login");
  return {
    type: LOGIN_SUCCESS,
    payload: logged_in_user
  };
};

export const getLogout = () => {
  console.log("called logout");
  return {
    type: LOGOUT_SUCCESS
  };
};