import React, {Component} from 'react';
import AuthService from './auth-service';


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
        <div className="forgotPassword">

        <h3>Modification du mot de passe</h3>
        <form onSubmit={this.handleFormSubmit}>
          <label>Votre adresse mail :</label>
          <input type="text" name="email" value={this.state.email} onChange={e => this.handleForgotPassword(e)}/>
        
          {/* <label>Recevoir un email de réinitialisation  :</label> */}
          <input type="submit" value="Submit" />
        </form>
        
        
        </div>
      );
              }
}

export default ForgotPassword;
