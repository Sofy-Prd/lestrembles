import React, {Component} from 'react';
import AuthService from '../auth/auth-service';
import axios from 'axios';

import { Link } from 'react-router-dom'; 
// import { Redirect } from 'react-router-dom';

import Loader from '../Loader.js';
// import SendAbsences from './SendAbsences.js'



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
           
            this.props.getUser(null);
           
                })}
          
        ;

    

    componentDidUpdate(prevProps) {
        if (prevProps.user !== this.props.user) {
            if (this.props.user === false) {
                this.props.history.push('/espacePerso/login')
            }
        }
    }
    // componentDidMount() {
    //     // this.props.getUser(this.props.user);
    //     console.log("this.props.user",this.props.user)
    //     this.getTheFamily()
     
        

    //   }

    // getTheFamily = () => {
        
    //     axios.get(`http://localhost:5000/api/user`,{params:{userId:this.props.user._id}})
    //     .then(responseFromApi => {
    //         console.log("responseFromApi",responseFromApi);

         
    //       this.setState({
    //         theFamily: responseFromApi.data
    //       })
    //     })
    //     .catch((err)=>{
    //         console.log(err)
    //     })

    //   }

    
    render () {

        if (!this.props.user._id) return <Loader>veuillez patienter pendant le chargement de la page...</Loader>

        console.log("user",this.props.user);
        // console.log("family",this.props.family);
        
       
        return (
           
            <div>
                
                <div className="EspacePerso">
                    <h1>Bienvenue {this.props.user.username}</h1>
                    <p>family : {this.props.family.username}</p>

                    <Link to="/espacePerso/profil"><h2>voir mes information personnelles</h2></Link>
                    <p>quel enfant sera absent ?</p>
                    <ul>
                    {
                    this.props.user.adherent.map(membre => (
                            <Link to={`/espacePerso/${membre.prenom}/sendAbsences`}><li key={membre._id}>Prénom de l'adhérent: {membre.prenom}</li></Link>
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