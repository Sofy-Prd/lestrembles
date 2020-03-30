import React, {Component} from 'react';
import MailService from './mail-service';
import axios from 'axios';
import NavBarEspacePerso from './navbarEspacePerso.js';
import NavBar from '../general/NavBar.js'

class SendAbsences extends Component {
  constructor(props) {
    super(props)

    const { params } = this.props.match;  // {name: "Marion"}
    let user = this.props.user; // {}
    let adherents = user.adherent; // undefined
    
    if (adherents) {

    
    let adherent = adherents.filter(adherent => adherent.prenom.includes(params.name));
    let prenom = adherent[0].prenom;
    let nom = adherent[0].nom;
    let profEmail=adherent[0].cours1.prof.email;
    let prof=adherent[0].cours1.prof.prenom;
   
    this.state={
      profEmail:profEmail,
      message:"",
      prenom:prenom,
      nom:nom,
      date:"",
      prof:prof
      }
    }
  }
  
  componentDidUpdate(prevProps) {
    if (prevProps.user !== this.props.user) {
      const { params } = this.props.match;  // {name: "Marion"}
      let user = this.props.user; // {}
      let adherents = user.adherent;
      let adherent = adherents.filter(adherent => adherent.prenom.includes(params.name));
      let prenom = adherent[0].prenom;
      let nom = adherent[0].nom;
      let profEmail=adherent[0].cours1.prof.email;
      let prof=adherent[0].cours1.prof.prenom;
     
      this.setState({ 
        profEmail:profEmail,
        message:"",
        prenom:prenom,
        nom:nom,
        date:"",
        prof:prof})
    }
  }
 
  service = new MailService();

  handleFormSubmit = (event) => {
    const profEmail=this.state.profEmail;
    const message=this.state.message;
    const prenom=this.state.prenom; 
    const nom=this.state.nom; 
    const date=this.state.date;
    
    event.preventDefault();


    axios.put(`${process.env.REACT_APP_APIURL || ""}/api/user/:name/sendAbsences`, { profEmail, message,prenom, nom, date })
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
      <div>
        <NavBar/>
        <div className="espacePerso">
          <div className="navbarEspacePerso">
            <NavBarEspacePerso user={this.props.user} history={this.props.history}/>
          </div>

          <div className="partieDroiteEspacePerso">
            <div className="sendAbsences">
              <form className="formSendAbsences" onSubmit={this.handleFormSubmit}>
                  <p> Prevenir par mail <span>{this.state.prof}</span> de l'absence de <span>{this.state.prenom}</span> </p>
                  <label>Motif:</label> 
                  <input className="motif" type="textarea" name="message" value={this.state.message} onChange={e => this.handleSendAbsences(e)}/>
                  <label>Date :</label>
                  <input className="date" type="date" name="date" value={this.state.date} onChange={e => this.handleSendAbsences(e)}/>
                  <input id="button" type="submit" value="Submit" />
              </form>
          </div> 
          </div>
        </div>
      
      </div>
    );
  }
}


export default SendAbsences;
