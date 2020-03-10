import React, {Component} from 'react';
import MailService from './mail-service';
import axios from 'axios';

class SendAbsences extends Component {
  state = {
    profEmail:this.props.profEmail,
    message:"",
    prenom:this.props.prenom,
    nom:this.props.nom,
    date:""
  }

 
  service = new MailService();

  handleFormSubmit = (event) => {
    const profEmail=this.state.profEmail;
    const message=this.state.message;
    const prenom=this.state.prenom; 
    const nom=this.state.nom; 
    const date=this.state.date;
    
    event.preventDefault();

    axios.post(`http://localhost:5000/api/user/sendAbesences`, { profEmail, message,prenom, nom, date })
        .then(
           
            this.props.history.push('/espacePerso')
          
            )
    
      .catch( error => console.log(error) )
    }

  handleSendAbsences = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
}

 
  render() {
    
      return (
        <div className="SendAbsences">

        {/* <h3>adherent : {this.props.adherent[0].prenom}</h3> */}

        {/* <form onSubmit={this.handleFormSubmit}>
          <label>Motif:</label>
          <input type="textarea" name="message" value={this.state.message} onChange={e => this.handleSendAbsences(e)}/>
          <label>Nom :</label>
          <input type="date" name="date" value={this.state.date} onChange={e => this.handleSendAbsences(e)}/>
          
          <input type="submit" value="Submit" />
        </form> */}
        
        
        </div>
      );
              }
}

export default SendAbsences;
