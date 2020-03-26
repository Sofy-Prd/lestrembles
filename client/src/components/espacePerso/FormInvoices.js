import React, {Component} from 'react';

// import axios from 'axios';

import { Link } from 'react-router-dom'; 
// import { Redirect } from 'react-router-dom';

import Loader from '../Loader.js';
// import SendAbsences from './SendAbsences.js'

import NavBarEspacePerso from './navbarEspacePerso.js';


class FormInvoices extends Component {
    
    

    

    componentDidUpdate(prevProps) {
        if (prevProps.user !== this.props.user) {
            if (this.props.user === false) {
                this.props.history.push('/espacePerso/login')
            }
        }
    }
   
   

    
    render () {

        if (!this.props.user._id) return <Loader>veuillez patienter pendant le chargement de la page...</Loader>

        console.log("user",this.props.user);
      
        
       
        return (
           
          
                
                <div className="espacePerso">

                    <div className="navbarEspacePerso">
                        <NavBarEspacePerso />
                    </div>

                    <div className="partieDroiteEspacePerso">
                     
                    <p>Pour quel adherent souhaitez vous une facture ?</p>
                        <ul>
                        {
                        this.props.user.adherent.map(membre => (
                                <Link to={`/espacePerso/${membre.prenom}/sendInvoices`}><li key={membre._id}>Prénom de l'adhérent: {membre.prenom}</li></Link>
                            ))
                        }
                        </ul>
     
                      

                     
                    </div>

            </div>
        );
    }
}

export default FormInvoices;