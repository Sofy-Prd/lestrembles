import React, {Component} from 'react';
import AuthService from '../auth/auth-service';
// import axios from 'axios';

import { Link } from 'react-router-dom'; 
// import { Redirect } from 'react-router-dom';

import Loader from '../Loader.js';
// import SendAbsences from './SendAbsences.js'
import navbarEspacePerso from './navbarEspacePerso.js';
import NavBarEspacePerso from './navbarEspacePerso.js';


class EspacePerso extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
        this.service = new AuthService();
    }
   
    
   

    logout = (event) => {
       this.service.logout()
          .then(()=>{
            this.props.history.push('/espacePerso/login')
           
            this.props.setUser(null);
           
                })}
          
        ;

    

    componentDidUpdate(prevProps) {
        if (prevProps.user !== this.props.user) {
            if (this.props.user === false) {
                this.props.history.push('/espacePerso/login')
            }
        }
    }
   
   

    
    render () {

        if (!this.props.user._id) return <Loader>veuillez patienter pendant le chargement de la page...</Loader>

       
      
        
       
        return (
           
          
                
                <div className="espacePerso">

                    <div className="navbarEspacePerso">
                        <NavBarEspacePerso user={this.props.user} history={this.props.history}/>
                    </div>

                    <div className="partieDroiteEspacePerso">
                        <h1>Bienvenue dans votre espace Famille {this.props.user.username} !</h1>


                        <p> Dans la rubrique <span>Profil</span> vous pourrez consulter les informations au sujet des cours des adherents de votre famille</p>
                        <p> mais aussi modifier vos coordonnées</p>
                        <p> Dans la rubrique <span>Absences</span> vous pourrez prevenir le professeur d'une absence à un cours</p>
                        <p> Dans la rubrique <span>Facture</span> vous pourrez recevoir un mail avec la facture de l'activité par adherent</p>


                        {/* <Link to="/espacePerso/profil"><h2>voir mes informations personnelles</h2></Link> */}
                        {/* <p>quel enfant sera absent ?</p>
                        <ul>
                        {
                        this.props.user.adherent.map(membre => (
                                <Link to={`/espacePerso/${membre.prenom}/sendAbsences`}><li key={membre._id}>Prénom de l'adhérent: {membre.prenom}</li></Link>
                            ))
                        }
                        </ul>

                        <p>Pour quel adherent souhaitez vous une facture ?</p>
                        <ul>
                        {
                        this.props.user.adherent.map(membre => (
                                <Link to={`/espacePerso/${membre.prenom}/sendInvoices`}><li key={membre._id}>Prénom de l'adhérent: {membre.prenom}</li></Link>
                            ))
                        }
                        </ul>
      */}
                        {/* <button className="btn logout" onClick={this.logout}>Logout</button> */}

                 
                    </div>

            </div>
        );
    }
}

export default EspacePerso;