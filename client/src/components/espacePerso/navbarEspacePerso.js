import React, {Component, useReducer} from 'react';
import AuthService from '../auth/auth-service';

import Profil from './Profil.js'
import { Link } from 'react-router-dom'; 
import { Redirect } from 'react-router-dom';


import Loader from '../Loader.js';
// import SendAbsences from './SendAbsences.js';

class NavBarEspacePerso extends Component {
    service = new AuthService();
    logout = (event) => {
        this.service.logout()
           .then(()=>{
             this.props.history.push('/espacePerso/login')
            
            //  this.props.setUser(null);
            
                 })};
    render () {
       
        console.log("user",this.props.user);
       

        return (
            <div className="navBarEP">



  
                <div className="user-navbar">
                    <h1>Espace perso</h1>

                </div>
                
                <div className="click-items-container">
                    <div className="click-item">
                    <div className="icone"><img src="/images/iconProfil.svg"/></div>
                    <div className="libelle"><Link to="/espacePerso/profil">Consulter mon profil</Link></div>    
                    </div>

                    <div className="click-item">
                    <div className="icone"><img src="/images/iconAbsence.svg"/></div>
                    <div className="libelle"> <Link to="/espacePerso/formAbsences">Prévenir d'une absence</Link></div>   
                    </div>
                
                    <div className="click-item">
                    <div className="icone"><img src="/images/iconFacture.svg"/></div>
                    <div className="libelle"><Link to="/espacePerso/formInvoices">Editer une facture</Link></div>    
                    </div>

                    <button className="btn logout" onClick={this.logout}></button>
                    {/* <div className="click-item">
                    <div className="icone"><img src="https://img.icons8.com/material-outlined/24/000000/buy.png"/></div>
                    <div className="libelle"><h2>Acheter des places</h2></div>   
                    </div> */}
                </div>
                

            
  
               
            </div>


        );

    }
}

export default NavBarEspacePerso;

