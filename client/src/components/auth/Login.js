import React, { Component } from 'react';
import AuthService from './auth-service';
import { Link } from 'react-router-dom';

class Login extends Component {
     constructor(props){
      super(props);
      this.state = { username: '', password: '' };
      this.service = new AuthService();
    }
  
    handleFormSubmit = (event) => {
      event.preventDefault();
      const username = this.state.username;
      const password = this.state.password;
      this.service.login(username, password)
      .then( data => {
          this.setState({ username: "", password: "" });
          this.props.getUser(data);
          this.props.history.push('/espacePerso');
      })
      .catch( error => console.log(error) )
    }
      
    handleChange = (event) => {  
      const {name, value} = event.target;
      this.setState({[name]: value});
    }
      
  render(){
    return(
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Nom :</label>
          <input type="text" name="username" value={this.state.username} onChange={ e => this.handleChange(e)}/>
          <label>Mot de passe:</label>
          <input type="password" name="password" value={this.state.password} onChange={ e => this.handleChange(e)} />
          
          <input type="submit" value="Login" />
        </form>
        <p> 
            <Link to={"/espacePerso/forgotPassword"}>J'ai oublié mon mot de passe</Link>
        </p>
      </div>
    )
  }
}

export default Login;