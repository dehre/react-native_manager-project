import React from 'react';
import {Scene,Router,Actions} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = ()=>{
  return (
    <Router sceneStyle={{ paddingTop: 55 }}>
      <Scene key="main">
        <Scene
          onLeft={()=>{Actions.auth()}}
          leftTitle="Login"
          onRight={()=>{Actions.employeeCreate()}}
          rightTitle="Add"
          key="employeeList"
          component={EmployeeList}/>
        <Scene
          key="employeeCreate"
          component={EmployeeCreate}
          title="Create Employee"
          initial/>
      </Scene>
      <Scene key="auth">
        <Scene
          key="login"
          component={LoginForm}
          title="Please Login"/>
      </Scene>
    </Router>
  )
}

export default RouterComponent;
