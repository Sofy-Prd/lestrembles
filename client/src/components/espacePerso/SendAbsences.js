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
    console.log ("user", user);
    console.log ("adherents", adherents);
    console.log ("params", params);

    if (adherents) {

    
    let adherent = adherents.filter(adherent => adherent.prenom.includes(params.name));
    console.log("adherent", adherent);
    let prenom = adherent[0].prenom;
    console.log("prenom",prenom);
    let nom = adherent[0].nom;
    console.log("nom",nom)
    let profEmail=adherent[0].cours1.prof.email;
    let prof=adherent[0].cours1.prof.prenom;
    console.log("profEmail",profEmail)

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
      console.log("adherent", adherent);
      let prenom = adherent[0].prenom;
      console.log("prenom",prenom);
      let nom = adherent[0].nom;
      console.log("nom",nom)
      let profEmail=adherent[0].cours1.prof.email;
      let prof=adherent[0].cours1.prof.prenom;
      console.log("profEmail",profEmail)

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
                        <NavBarEspacePerso />
                    </div>

                    <div className="partieDroiteEspacePerso">
                     

        {/* <h3>adherent : {this.props.adherent[0].prenom}</h3> */}

        <p> Prevenir par mail {this.state.prof} de l'absence de {this.state.prenom} </p>

        <form onSubmit={this.handleFormSubmit}>
            {/* <label>Nom:</label>
            <input type="text" name="prenom"  value={this.state.prenom} onChange={e => this.handleSendAbsences(e)}/>
            <label>Prenom:</label>
            <input type="text" name="nom" value={this.state.nom}/>
            <label>Email de la prof:</label>
            <input type="text" name="profEmail" value={this.state.profEmail}/> */}
            <label>Motif:</label> 
            <input type="textarea" name="message" value={this.state.message} onChange={e => this.handleSendAbsences(e)}/>
            <label>Date :</label>
            <input type="date" name="date" value={this.state.date} onChange={e => this.handleSendAbsences(e)}/>
          
          <input type="submit" value="Submit" />
        </form>
        </div>
        </div>
        
        </div>
      );
              }
}


export default SendAbsences;
