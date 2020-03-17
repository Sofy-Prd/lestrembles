import React, {Component} from 'react';
import MailService from './mail-service';
import axios from 'axios';

class SendAbsences extends Component {
  state = {
    profEmail:"",
    message:"",
    prenom:"",
    nom:"",
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


    axios.put(`http://localhost:5000/api/user/:name/sendAbsences`, { profEmail, message,prenom, nom, date })
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
     
   
    const { params } = this.props.match;
    let user = this.props.user;
    let adherents = user.adherent;
      console.log ("user", user);
      console.log ("adherents", adherents);
      console.log ("params", params);
    
      
      
     let adherent = adherents.filter(adherent => adherent.prenom.includes(params.name));
     console.log("adherent", adherent);
       let prenom = adherent[0].prenom;
       console.log("prenom",prenom);
       let nom = adherent[0].nom;
       console.log("nom",nom)
       let profEmail=adherent[0].cours1.prof.email;
       console.log("profEmail",profEmail)
      //  this.setState({
      //   prenom:prenom,
      //   nom:nom,
      //   profEmail:profEmail

      
      //   })
      return (
        <div className="SendAbsences">

        {/* <h3>adherent : {this.props.adherent[0].prenom}</h3> */}

        <form onSubmit={this.handleFormSubmit}>
            <label>Nom:</label>
            <input type="text" name="prenom"  value={this.state.prenom}/>
            <label>Prenom:</label>
            <input type="text" name="nom" value={this.state.nom}/>
            <label>Email de la prof:</label>
            <input type="text" name="profEmail" value={this.state.profEmail}/>
            <label>Motif:</label> 
            <input type="textarea" name="message" value={this.state.message} onChange={e => this.handleSendAbsences(e)}/>
            <label>Nom :</label>
            <input type="date" name="date" value={this.state.date} onChange={e => this.handleSendAbsences(e)}/>
          
          <input type="submit" value="Submit" />
        </form>
        
        
        </div>
      );
              }
}

export default SendAbsences;
