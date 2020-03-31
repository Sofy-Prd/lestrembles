import React, {Component} from 'react';
import AuthService from '../auth/auth-service';
import { Link } from 'react-router-dom'; 


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
                <div className="user-navbar">
                    <a href="/espacePerso"><h1>Espace perso</h1></a>
                </div>
                
                <div className="click-items-container">
                    <div className="click-item">
                        <div className="icone"><img src="/images/iconProfil.svg" alt=""/></div>
                        <div className="libelle"><Link to="/espacePerso/profil"><span>Consulter mon profil</span></Link></div>    
                    </div>
                    <div className="click-item">
                        <div className="icone"><img src="/images/iconAbsence.svg" alt=""/></div>
                        <div className="libelle"> <Link to="/espacePerso/formAbsences"><span>Prévenir d'une absence</span></Link></div>   
                    </div>
                    <div className="click-item">
                        <div className="icone"><img src="/images/iconFacture.svg" alt=""/></div>
                        <div className="libelle"><Link to="/espacePerso/formInvoices"><span>Recevoir une facture</span></Link></div>    
                    </div>

                    <button onClick={this.logout}></button>
                  
                </div>
              
            </div>
        );
    }
}

export default NavBarEspacePerso;

