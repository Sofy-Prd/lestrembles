import React, {Component} from 'react';
import AuthService from './auth-service';
import NavBarEspacePerso from '../espacePerso/navbarEspacePerso.js';
import NavBar from '../general/NavBar.js'


class ChangePassword extends Component {
  state = {
    password1:"",
    password2:"",
    error:""
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
      .catch( err => this.setState({error: err.response.data.message}) )
    }

  handleChangePassword = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
}

 
  render() {
    
      return (
        <div className="changePasswordFlex">
            <NavBar/>
            <div className="navbarEspacePerso">
              <NavBarEspacePerso user={this.props.user} history={this.props.history}/>
            </div>
            <div className="changePassword partieDroiteChangePassword">
            
              <form onSubmit={this.handleFormSubmit}>
              <h1>Modification du mot de passe</h1>
                {this.state.error && (
                        <p className="error">{this.state.error}</p>
                      )}
                <label>Veuiller taper votre nouveau mot de passe :</label>
                <input type="password" name="password1" value={this.state.password1} onChange={e => this.handleChangePassword(e)}/>
                <label>Veuillez confirmer votre mot de passe :</label>
                <input type="password" name="password2" value={this.state.password2} onChange={e => this.handleChangePassword(e)}/>
                <input id="button" type="submit" value="Enregistrer" />
              </form>
            </div>
        </div>

      );
   }
}

export default ChangePassword;
