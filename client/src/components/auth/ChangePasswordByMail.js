import React, {Component} from 'react';
import AuthService from './auth-service';
import axios from 'axios';

class ChangePasswordByMail extends Component {
  state = {
    password1:"",
    password2:"",
  }

  componentDidMount(){
    this.getTheToken();
}

getTheToken = () => {
    const { params } = this.props.match;
    
    axios.get(`${process.env.REACT_APP_APIURL || ""}/api/changePasswordByMail/${params.token}`)
    .then(response => response.data)
    .catch((err)=>{
        console.log(err)
    })
}
  service = new AuthService();

  handleFormSubmit = (event) => {
    const password1 = this.state.password1;
    const password2 = this.state.password2;
    const { params } = this.props.match;
    
    event.preventDefault();

    axios.post(`${process.env.REACT_APP_APIURL || ""}/api/changePasswordByMail/${params.token}`, { password1, password2 })
        .then(
           
            this.props.history.push('/espacePerso/login')
          
            )
    
      .catch( error => console.log(error) )
    }

  handleChangePasswordByMail = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
}

 
  render() {
    
      return (
        <div className="changePassword">

        <h1>Modification du mot de passe</h1>
        <form onSubmit={this.handleFormSubmit}>
          <label>Veuiller taper votre nouveau mot de passe :</label>
          <input type="password" name="password1" value={this.state.password1} onChange={e => this.handleChangePasswordByMail(e)}/>
          <label>Veuillez confirmer votre mot de passe :</label>
          <input type="password" name="password2" value={this.state.password2} onChange={e => this.handleChangePasswordByMail(e)}/>
          
          <input id="button" type="submit" value="Submit" />
        </form>
        
        
        </div>
      );
      }
}

export default ChangePasswordByMail;
