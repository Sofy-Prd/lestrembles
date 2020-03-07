import React, {Component} from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Login from './components/auth/Login.js'
import EspacePerso from './components/espacePerso/EspacePerso.js'


import AuthService from './components/auth/auth-service';

class App extends Component {
  state = {
    user: {}

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
          this.setState({user: {}}) 
        })
    }
  }
  
  // 👇
  componentDidMount() {
    this.fetchUser();
  }

  getTheUser= (userObj) => {
    this.setState({
      loggedInUser: userObj
    })
  }

  render() {
      return (
        <div className="App">


          <Switch> 
            <Route exact path='/espacePerso/login' render={(props) => <Login {...props} getUser={this.getTheUser}/>}/>

            <Route exact path="/espacePerso" render={(props) => (
                <EspacePerso {...props} user={this.state.user} />
              )} />
          </Switch>
        
        </div>
      );
              }
}

export default App;
