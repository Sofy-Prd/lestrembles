import React, { Component } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';

import EditProfil from './EditProfil.js'


class Profil extends Component {
 
      state = {
        theFamily:{}
      }
  

  // componentDidMount(){
  //     this.props.getFamily()
  //     .then(family => {
   
  //       this.setState({
  //         theFamily: family
  //       })
  //     })
  //     .catch((err)=>{
  //         console.log(err)
  //     })

  // }


  // getUser = () => {
  //   //   const { params } = this.props.match;
  //     axios.get(`http://localhost:5000/api/user`)
  //     .then( responseFromApi =>{
  //         const theUser = responseFromApi.data;
  //         this.setState(theUser);
  //     })
  //     .catch((err)=>{
  //         console.log(err)
  //     })
  // }
  
  // 👨‍🏫
  // renderEditForm = () => {
  //   if(!this.state.nom){
  //     this.getFamily();
  //   } else {
  //   //                                                    {...props} => so we can have 'this.props.history' in Edit.js
  //   //                                                                                          ^
  //   //                                                                                          |
  //     return <EditProfil theFamily={this.state.theFamily} />
        
  //   }
  // }

  
  render() {
    

    console.log("theFamily", this.state.theFamily);
    console.log("props", this.props)
    
    return(
      <div>
   
        <h1>Nom : {this.state.nom}</h1>
        <p>Prénom : {this.state.prenom}</p>
        <p>Adherents : </p>
        <ul>
                    {/* {
                    this.state.adherent.map(membre => (
                            <li key={membre._id}>Prénom de l'adhérent: {membre.prenom}</li>
                        ))
                    } */}
                    </ul>


       

        {/* <div>{this.renderEditForm()} </div> */}

       
      </div>
    )
  }
}

export default Profil;