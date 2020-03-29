import React, {Component} from 'react';
import AuthService from './auth-service';
import NavBar from '../general/NavBar.js';


class ForgotPassword extends Component {
  state = {
      email:""
    }
  
  service = new AuthService();
    
  handleFormSubmit = (event) => {
    const email = this.state.email;
   

    event.preventDefault();

    this.service.forgotPassword(email)
    .then(response => {
        this.setState({error: ""});
        
      
        this.props.history.push('/espacePerso/login');
      })
      .catch( error => console.log(error) )
    }

  handleForgotPassword = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
}

 
  render() {
    
      return (
        <div>
        <NavBar/>
        <div className="changePassword">

        <h1>Oubli du mot de passe</h1>
        <form onSubmit={this.handleFormSubmit}>
          <label id="forgotLabel">Veuillez taper votre adresse mail ci-dessous pour recevoir un lien de réinitialisation :</label>
          <input type="text" name="email" value={this.state.email} onChange={e => this.handleForgotPassword(e)}/>
        
          {/* <label>Recevoir un email de réinitialisation  :</label> */}
          <input id="button" type="submit" value="Envoyer l'email" />
        </form>
        
        </div>
        </div>
      );
  }
}

export default ForgotPassword;
