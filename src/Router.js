import React from 'react';
import {Scene,Router,Actions} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = ()=>{
  return (
    <Router sceneStyle={{ paddingTop: 55 }}>
      <Scene key="auth">
        <Scene
          key="login"
          component={LoginForm}
          title="Please Login"
          initial></Scene>
      </Scene>
      <Scene key="main">
        <Scene
          onLeft={()=>{Actions.auth()}}
          leftTitle="Login"
          onRight={()=>{Actions.employeeCreate()}}
          rightTitle="Add"
          key="employeeList"
          component={EmployeeList}></Scene>
        <Scene
          key="employeeCreate"
          component={EmployeeCreate}
          title="Create Employee"></Scene>
        <Scene
          key="employeeEdit"
          component={EmployeeEdit}
          title="Update Employee"></Scene>
      </Scene>
    </Router>
  )
}

export default RouterComponent;
