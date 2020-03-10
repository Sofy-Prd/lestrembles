import React, {Component} from 'react';
import AuthService from './auth-service';


class ChangePassword extends Component {
  state = {
    password1:"",
    password2:"",


  }
  service = new AuthService();

  handleFormSubmit = (event) => {
    const password1 = this.state.password1;
    const password2 = this.state.password2;
    
    event.preventDefault();

    this.service.changePassword(password1,password2)
    .then(response => {
        this.setState({error: ""});
        
      
        this.props.history.push('/espacePerso');
      })
      .catch( error => console.log(error) )
    }

  handleChangePassword = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
}

 
  render() {
    
      return (
        <div className="changePassword">

        <h3>Modification du mot de passe</h3>
        <form onSubmit={this.handleFormSubmit}>
          <label>Veuiller taper votre nouveau mot de passe :</label>
          <input type="password" name="password1" value={this.state.password1} onChange={e => this.handleChangePassword(e)}/>
          <label>Veuillez confirmer votre mot de passe :</label>
          <input type="password" name="password2" value={this.state.password2} onChange={e => this.handleChangePassword(e)}/>
          
          <input type="submit" value="Submit" />
        </form>
        
        
        </div>
      );
              }
}

export default ChangePassword;
