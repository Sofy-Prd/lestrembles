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

    axios.put(`http://localhost:5000/api/user/sendAbsences`, { profEmail, message,prenom, nom, date })
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
     
    //  let prenom = this.props.user.adherent.prenom;
    //  let nom = this.props.user.adherent.nom;
    const { params } = this.props.match;
    let user = this.props.user;
    let adherents = user.adherent;
      console.log ("adherents", adherents);
      console.log ("params", params);
      // let profEmail="sophie.pirodon@gmail.com"
      
      
     let adherent = adherents.filter(adherent => adherent.prenom.includes(params.name));
     console.log("adherent", adherent);
      return (
        <div className="SendAbsences">

        {/* <h3>adherent : {this.props.adherent[0].prenom}</h3> */}

        <form onSubmit={this.handleFormSubmit}>
            <input type="hidden" name="prenom"  value={adherent.prenom}/>
            <input type="hidden" name="nom" value={adherent.prenom}/>
         
            <input type="hidden" name="profEmail" value={adherent.cours1.prof.email}/>
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
