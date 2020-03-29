import React, {Component} from 'react';
import NavBar from '../general/NavBar.js';
import { Link } from 'react-router-dom'; 

import Loader from '../Loader.js';

import NavBarEspacePerso from './navbarEspacePerso.js';


class FormAbsences extends Component {
 
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
                        <NavBarEspacePerso />
                    </div>

                    <div className="partieDroiteEspacePerso">
                     
                        <p>quel enfant sera absent ?</p>
                        <ul>
                        {
                        this.props.user.adherent.map(membre => (
                                <Link to={`/espacePerso/${membre.prenom}/sendAbsences`}><li key={membre._id}>Prénom de l'adhérent: {membre.prenom}</li></Link>
                            ))
                        }
                        </ul>

                     
                    </div>
                    </div>
            </div>
        );
    }
}

export default FormAbsences;