import {combineReducers} from "redux";

import EmployeeFormReducer from "./EmployeeFormReducer";
import AuthReducer from "./AuthReducer";
import EmployeeReducer from "./EmployeeReducer";

export default combineReducers({
  employeeForm: EmployeeFormReducer,
  auth: AuthReducer,
  employees: EmployeeReducer
})
