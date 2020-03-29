import React, {Component} from 'react';
import MailService from './mail-service';
import axios from 'axios';
import NavBarEspacePerso from './navbarEspacePerso.js';
import NavBar from '../general/NavBar.js'

class SendInvoices extends Component {
  constructor(props) {
    super(props)

    const { params } = this.props.match;  // {name: "Marion"}
    let user = this.props.user; // {}
    let email = this.props.user.email; // {}
    let adherents = user.adherent; // undefined
    console.log ("user", user);
    console.log ("userEmail", email);
    console.log ("adherents", adherents);
    console.log ("params", params);

    if (adherents) {

    
    let adherent = adherents.filter(adherent => adherent.prenom.includes(params.name));
    console.log("adherent", adherent);
    let prenom = adherent[0].prenom;
    console.log("prenom",prenom);
    let nom = adherent[0].nom;
    console.log("nom",nom);
    let tarif=adherent[0].cours1.duree.montant; //pour récupérer le montant 
    console.log("tarif",tarif);


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
      const { params } = this.props.match;  // {name: "Marion"}
      let user = this.props.user; // {}
      let adherents = user.adherent;
      let adherent = adherents.filter(adherent => adherent.prenom.includes(params.name));
      console.log("adherent", adherent);
      let prenom = adherent[0].prenom;
      console.log("prenom",prenom);
      let nom = adherent[0].nom;
      console.log("nom",nom);
      let tarif=adherent[0].cours1.duree.montant; //pour récupérer le montant 
      console.log("tarif",tarif);
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
                <NavBarEspacePerso />
            </div>

            <div className="partieDroiteEspacePerso">
             
        <div className="SendInvoices">

        
        <form onSubmit={this.handleFormSubmit}>
            {/* <label>Prenom :</label>
            <input type="text" name="prenom"  value={this.state.prenom} onChange={e => this.handleSendInvoices(e)}/>
	    <label>Nom :</label>
            <input type="text" name="nom" value={this.state.nom} onChange={e => this.handleSendInvoices(e)}/>
            <label>Email de la Famille:</label>
            <input type="text" name="email" value={this.state.email}/>
            <label>Tarif :</label>
            <input type="number" name="tarif" value={this.state.tarif} onChange={e => this.handleSendInvoices(e)}/> */}
            <label>A ÉDITER EN DATE DU:</label>
            <input type="date" name="date" value={this.state.date} onChange={e => this.handleSendInvoices(e)}/>
                 
          <input type="submit" value="Submit" />
        </form>
        
        </div>
        </div>
        </div>

        </div>
      );
              }
            }
  


export default SendInvoices;

