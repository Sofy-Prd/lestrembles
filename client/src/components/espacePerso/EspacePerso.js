import React, {Component} from 'react';
import AuthService from '../auth/auth-service';
import Loader from '../Loader.js';
import NavBarEspacePerso from './navbarEspacePerso.js';
import NavBar from '../general/NavBar.js'


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
           
                })};

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
           
          <div> 
            <NavBar/>
                <div className="espacePerso">
                   <div className="navbarEspacePerso">
                        <NavBarEspacePerso user={this.props.user} history={this.props.history}/>
                    </div>

                    <div className="partieDroiteEspacePerso">
                        <div className="espacePersoAccueil">
                            <h1>Bienvenue dans votre espace </h1>
                            <h1>Famille {this.props.user.username} !</h1>
                            <p> Dans la rubrique <span>Consulter mon Profil</span> vous pourrez consulter les informations au sujet des cours des adhérents de votre famille mais aussi modifier vos coordonnées</p>
                            <p> Dans la rubrique <span>Prevenir d'une absence</span> vous pourrez prevenir le professeur d'une absence à un cours</p>
                            <p> Dans la rubrique <span>Recevoir une facture</span> vous pourrez recevoir un mail avec la facture de l'activité par adhérent</p>
                        </div>
                    </div>
                 </div>
            </div>
        );
    }
}

export default EspacePerso;