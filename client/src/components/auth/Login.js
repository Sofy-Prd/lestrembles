import React, { Component } from 'react';
import AuthService from './auth-service';
import { Link } from 'react-router-dom';
import NavBar from '../general/NavBar.js';

class Login extends Component {
     constructor(props){
      super(props);
      this.state = { username: '', password: '', error: "" };
      this.service = new AuthService();
    }
  
    handleFormSubmit = (event) => {
      event.preventDefault();
      const username = this.state.username;
      const password = this.state.password;
      this.service.login(username, password)
      .then( data => {
          this.setState({error: ""});
          this.setState({ username: "", password: "" });
          this.props.setUser(data);
          this.props.history.push('/espacePerso');
      })
      .catch( err => this.setState({error: err.response.data.message}) )
    }
      
    handleChange = (event) => {  
      const {name, value} = event.target;
      this.setState({[name]: value});
    }
      
  render(){
    return(
      <div>
        <NavBar/>
     
      <div className="login">

        <h1>Mon espace</h1>

        <form onSubmit={this.handleFormSubmit}>
          {this.state.error && (
                <p className="error">{this.state.error}</p>
              )}

          <label>Identifiant :</label>
          <input type="text" name="username" value={this.state.username} onChange={ e => this.handleChange(e)}/>
          <label>Mot de passe:</label>
          <input type="password" name="password" value={this.state.password} onChange={ e => this.handleChange(e)} />
          
          <input id="button" type="submit" value="CONNEXION"/>
          <p> 
            <Link to={"/espacePerso/forgotPassword"}>J'ai oublié mon mot de passe</Link>
        </p>
        </form>
        
      </div>
      </div>
    )
  }
}

export default Login;