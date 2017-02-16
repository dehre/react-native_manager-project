import {combineReducers} from "redux";

import EmployeesReducer from "./EmployeesReducer";
import AuthReducer from "./AuthReducer";

export default combineReducers({
  employees: EmployeesReducer,
  auth: AuthReducer
})
