import React, { Component } from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import NavBarEspacePerso from './navbarEspacePerso.js';
import NavBar from '../general/NavBar.js'


import Loader from '../Loader.js';
import AuthService from '../auth/auth-service';

class Profil extends Component {

  service = new AuthService();

  render() {
    if (!this.props.user._id) return <Loader>veuillez patienter pendant le chargement de la page...</Loader>

    let user = this.props.user;
    let adherents = user.adherent;
   
    return(
      <div className="profil">
        <NavBar/>
        <div className="navbarEspacePerso">
          <NavBarEspacePerso user={this.props.user} history={this.props.history}/>
        </div>

        <div className="partieDroiteProfil">
          <div className="profilDetailGauche">
            <h1>Informations</h1>
            <p><span>Nom :</span> {user.username}</p>
            <p><span>email :</span><span id="email">{user.email}</span></p>
            <div className="adresse">
              <p><span>adresse :</span></p>
              <div className="adresseDetails">
                <p>{user.rue}</p>
                <p>{user.codePostal} {user.ville}</p>  
              </div>
            </div>
            <div className="adresse">
              <p><span>Téléphones :</span> </p>
              <div className="adresseDetails">
                <p>{user.telephone1} </p>
                <p >{user.telephone2} </p>
              </div>
            </div>
            <div className="liens">
              <Link to="/espacePerso/editProfil">Modifier le profil</Link>
              <Link to="/espacePerso/changePassword">Modifier le mot de passe</Link>
            </div>
          </div>
          <div className="profilDetailDroite">
            <h1>Adhérent(s):</h1>
            <div>
              <ul>
                {
                adherents.map(membre => (
              <div className="adherents" key={membre._id}>
                <div className="adherentGauche">
                  <p><span>{membre.prenom}</span></p>
                  <p>Groupe {membre.cours1.nom} </p> 
                  <p> {membre.cours1.jour} - {membre.cours1.horaire}</p> 
                  <p>{membre.cours1.lieu.nom}</p>
                </div>
                <div className="adherentDroite">
                  <p>avec</p>
                  <img src={membre.cours1.prof.photoProfil} alt="prof"/>
                  <p> {membre.cours1.prof.prenom}</p>
                </div>          
              </div>
                    ))
                }
                </ul>
            </div> 
          </div>  
      </div>
    </div>
    )
  }
}

export default Profil;