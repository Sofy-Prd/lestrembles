import React, {Component} from 'react';
import AuthService from '../auth/auth-service';

import { Link } from 'react-router-dom'; 
// import { Redirect } from 'react-router-dom';

import Loader from '../Loader.js';
// import SendAbsences from './SendAbsences.js'



class EspacePerso extends Component {
    
    service = new AuthService();

    logout = (event) => {
       this.service.logout()
          .then(
            this.props.history.push('/espacePerso/login')
           
            )}
          
        ;

    

    componentDidUpdate(prevProps) {
        if (prevProps.user !== this.props.user) {
            if (this.props.user === false) {
                this.props.history.push('/espacePerso/login')
            }
        }
    }


    
    //  getAdherent() {
    //      this.props.getAdherent(this.props.user.adherent);
    //     console.log("je m'execute");
    //     }

    // componentDidMount () {
    //     this.getAdherent()
    // }

    render () {

        if (!this.props.user._id) return <Loader>veuillez patienter pendant le chargement de la page...</Loader>
        // console.log(this.props.user.adherent);
       
        return (
           
            <div>
                {/* {!this.props.user._id ? (
                    <Redirect to="/espacePerso/login" />
                ) : ( */}
                <div className="EspacePerso">
                    <h1>Bienvenue {this.props.user.username}</h1>
                    <p>quel enfant sera absent ?</p>
                    <ul>
                    {
                    this.props.user.adherent.map(membre => (
                            <Link to="/espacePerso/sendAbsences"><li key={membre._id}>Prénom de l'adhérent: {membre.prenom}</li></Link>
                        ))
                    }
                    </ul>



                    {/* <SendAbsences prenom=""    /> */}
                    
                    <button className="btn logout" onClick={this.logout}>Logout</button>
                </div>

            </div>
        );
    }
}

export default EspacePerso;