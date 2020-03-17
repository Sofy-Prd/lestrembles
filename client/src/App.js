import React, {Component} from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Login from './components/auth/Login.js'
import EspacePerso from './components/espacePerso/EspacePerso.js'
import Profil from './components/espacePerso/Profil.js'
import EditProfil from './components/espacePerso/EditProfil.js'
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
    // adherent:{},
    theFamily:{}

  }

  service = new AuthService();

  

  // 👇
  fetchUser() {
    if (!this.state.user._id){
      this.service.loggedin()
        .then(data => {
        
          this.setState({user: data})
          this.getTheFamily(data._id)
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

  getTheFamily = () => {
        
    axios.get(`http://localhost:5000/api/user`,{params:{userId:this.state.user._id}})
    .then(responseFromApi => {
        console.log("responseFromApi",responseFromApi);

     
      this.setState({
        theFamily: responseFromApi.data
      })
    })
    .catch((err)=>{
        console.log(err)
    })

  }
 

  render() {
      return (
        <div className="App">


          <Switch> 

            <Route exact path='/cours' component={CoursList} />/>
            <Route exact path='/tarifs' component={TarifsList} />/>
            <Route exact path='/espacePerso/:name/sendAbsences' render={(props) => <SendAbsences {...props} getUser={this.getTheUser} user={this.state.user}/>}/> />/>
            
           

            <Route exact path='/espacePerso/forgotPassword' component={ForgotPassword} />/>

            <Route exact path='/espacePerso/changePassword' render={(props) => (<ChangePassword {...props} />)} />/>
            <Route exact path="/espacePerso/changePasswordByMail/:token" render={(props) => (<ChangePasswordByMail {...props} />)} />
          
            <Route exact path='/espacePerso/login' render={(props) => <Login {...props} getUser={this.getTheUser}/>}/>
            <Route exact path="/espacePerso/profil" render={(props) => (<Profil {...props} getUser={this.getTheUser} user={this.state.user}/>)} />
            <Route exact path="/espacePerso/editProfil" render={(props) => (<EditProfil {...props} user={this.state.user}/>)} />

            <Route exact path="/espacePerso" render={(props) => (<EspacePerso {...props} getUser={this.getTheUser} user={this.state.user} family={this.state.theFamily}/>)} />
           
          </Switch>
        
        </div>
      );
              }
}

export default App;
