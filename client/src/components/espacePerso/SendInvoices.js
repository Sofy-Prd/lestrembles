import React, {Component} from 'react';
import MailService from './mail-service';
import axios from 'axios';
import NavBarEspacePerso from './navbarEspacePerso.js';
import NavBar from '../general/NavBar.js'

class SendInvoices extends Component {
  constructor(props) {
    super(props)

    const { params } = this.props.match; 
    let user = this.props.user;
    let email = this.props.user.email; 
    let adherents = user.adherent; 
  
    if (adherents) {
    
    let adherent = adherents.filter(adherent => adherent.prenom.includes(params.name));
    let prenom = adherent[0].prenom;
    let nom = adherent[0].nom;
    let tarif=adherent[0].cours1.duree.montant; 

    this.state={
      email:email,
      prenom:prenom,
      nom:nom,
      tarif:tarif,
      subject: "",	
      date:""
      }
    }
  }
  
  componentDidUpdate(prevProps) {
    if (prevProps.user !== this.props.user) {
      const { params } = this.props.match; 
      let user = this.props.user; 
      let adherents = user.adherent;
      let adherent = adherents.filter(adherent => adherent.prenom.includes(params.name));
      let prenom = adherent[0].prenom;
      let nom = adherent[0].nom;
      let tarif=adherent[0].cours1.duree.montant; 
      let email=user.email;

      this.setState({ 
        email:email,
        prenom:prenom,
        nom:nom,
        tarif:tarif,
        date:""
      })
    }
  }
 
  service = new MailService();

  handleFormSubmit = (event) => {
    const email=this.state.email;
    const prenom=this.state.prenom; 
    const nom=this.state.nom; 
    const date=this.state.date;
    const tarif=this.state.tarif;
    
    event.preventDefault();


    axios.put(`${process.env.REACT_APP_APIURL || ""}/api/user/adherents/:name/sendInvoices`, { email, prenom, nom, tarif, date })
      .then(
        this.props.history.push('/espacePerso')
      )
      .catch( error => console.log(error) )
  }

  handleSendInvoices = (event) => {  
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
            <div className="sendInvoices">
           
            <form className="formSendInvoices" onSubmit={this.handleFormSubmit}>
                <p> Recevoir ma facture à cette adresse :<p>
                </p><span>{this.state.email}</span> </p>  
                <label>A éditer en date du :</label>
                <input className="date" type="date" name="date" value={this.state.date} onChange={e => this.handleSendInvoices(e)}/>
                <input id="button" type="submit" value="Recevoir la facture" />
              </form>
        
            </div>
          </div>
        </div>
      </div>
    );
  }
}
  


export default SendInvoices;

