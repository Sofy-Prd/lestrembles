import React, {Component} from 'react';
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
       

       

        return (
            <div className="navBarEP">
              
                <Link to="/espacePerso/profil">Consulter mon profil</Link>
                <Link to="/espacePerso/formAbsences">Prévenir d'une absence</Link>
                <Link to="/espacePerso/formInvoices">Editer une facture</Link>
                <button className="btn logout" onClick={this.logout}>Logout</button>
            </div>


        );

    }
}

export default NavBarEspacePerso;