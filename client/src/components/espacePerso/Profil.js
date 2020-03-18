import React, { Component } from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';


import Loader from '../Loader.js';
import AuthService from '../auth/auth-service';

class Profil extends Component {


  state= {
    user:this.props.user
  }

  service = new AuthService();

  fetchUser() {
    if (!this.state.user._id){
      this.service.loggedin()
        .then(data => {
        
          this.setState({user: data})
         
        })
        .catch(err => {

          this.setState({user: false}) 
        })
    }
  }
  
  // 👇
  componentDidMount() {
    this.fetchUser();
  }
   
  render() {
    if (!this.props.user._id) return <Loader>veuillez patienter pendant le chargement de la page...</Loader>

    let user = this.state.user;
    let adherents = user.adherent;
      // console.log ("user", user);
      // console.log ("adherents", adherents);
    
    return(
      <div>
   
        <p>Nom : {user.username}</p>
        <p>email : {user.email}</p>
        <p>adresse : {user.rue}  </p>
        <p>{user.codePostal} {user.ville}</p>  
        <p>Téléphones : </p>
        <p>{user.telephone1} </p>
        <p >{user.telephone2} </p>

         <p>Adhérent(s):</p>

         
        <ul>
          {
          adherents.map(membre => (
         <div>
                 <p>Prénom de l'adhérent: {membre.prenom}</p>
                   <p>Cours :{membre.cours1.nom} </p> 
                  <p> {membre.cours1.jour} {membre.cours1.horaire}</p> 
                  <p>{membre.cours1.lieu.nom}</p>
          
          
                  <p>avec {membre.cours1.prof.prenom}</p>
                  <img src={membre.cours1.prof.photo} alt="prof"/>  
                  
         </div>        
        
              ))
          }
          </ul>

          <Link to="/espacePerso/editProfil">Modifier le profil</Link>
       

       

       
      </div>
    )
  }
}

export default Profil;