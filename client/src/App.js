import React, {Component} from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Login from './components/auth/Login.js'
import EspacePerso from './components/espacePerso/EspacePerso.js'
import SendAbsences from './components/espacePerso/SendAbsences.js'
import ChangePassword from './components/auth/ChangePassword.js'
import ChangePasswordByMail from './components/auth/ChangePasswordByMail.js'
import ForgotPassword from './components/auth/ForgotPassword.js'
import CoursList from './components/general/CoursList.js'
import TarifsList from './components/general/TarifsList.js'


import AuthService from './components/auth/auth-service';

class App extends Component {
  state = {
    user: {},
    adherent:{}

  }

  service = new AuthService();

  

  // 👇
  fetchUser() {
    if (!this.state.user._id){
      this.service.loggedin()
        .then(data => {
          this.setState({user: data})
        })
        .catch(err => {

          this.setState({user: false}) 
        })
    }
  }
  
  // 👇
  componentDidMount() {
    this.fetchUser();
  }

  getTheUser= (userObj) => {
    console.log("getTheUser", userObj);
    this.setState({
      user: userObj
    })
  }

 

  render() {
      return (
        <div className="App">


          <Switch> 

            <Route exact path='/cours' component={CoursList} />/>
            <Route exact path='/tarifs' component={TarifsList} />/>
            <Route exact path='/espacePerso/:name/sendAbsences' render={() => <SendAbsences />}/> />/>


            <Route exact path='/espacePerso/forgotPassword' component={ForgotPassword} />/>

            <Route exact path='/espacePerso/changePassword' render={(props) => (<ChangePassword {...props} />)} />/>
            <Route exact path="/espacePerso/changePasswordByMail/:token" render={(props) => (<ChangePasswordByMail {...props} />)} />
          
            <Route exact path='/espacePerso/login' render={(props) => <Login {...props} getUser={this.getTheUser}/>}/>

            <Route exact path="/espacePerso" render={(props) => (<EspacePerso {...props} getAdherent={this.getTheAdherent} getUser={this.getTheUser} user={this.state.user} />)} />
          </Switch>
        
        </div>
      );
              }
}

export default App;
