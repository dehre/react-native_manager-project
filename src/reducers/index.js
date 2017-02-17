import {combineReducers} from "redux";

import EmployeeFormReducer from "./EmployeeFormReducer";
import AuthReducer from "./AuthReducer";

export default combineReducers({
  employeeForm: EmployeeFormReducer,
  auth: AuthReducer
})
