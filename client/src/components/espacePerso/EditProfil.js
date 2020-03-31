import React, { Component } from 'react';
// import axios from 'axios';
import AuthService from '../auth/auth-service';
import NavBarEspacePerso from './navbarEspacePerso.js';
import NavBar from '../general/NavBar.js'

class EditProfil extends Component {
  state= {
    userId:this.props.user._id,
    email: this.props.user.email,
    rue: this.props.user.rue,
    codePostal: this.props.user.codePostal,
    ville: this.props.user.ville,
    telephone1:this.props.user.telephone1,
    telephone2:this.props.user.telephone2,
    error:""
  }
  
  service = new AuthService();
    
  handleFormSubmit = (event) => {
    const userId=this.state.userId;
    const email= this.state.email;
    const rue= this.state.rue;
    const codePostal= this.state.codePostal;
    const ville= this.state.ville;
    const telephone1=this.state.telephone1;
    const telephone2=this.state.telephone2;
   
    event.preventDefault();

    this.service.editProfil(userId, email, rue,codePostal, ville, telephone1, telephone2)
    .then(data => {
        
        this.setState({error: ""});
        // on veut maj le user de App
        this.props.setUser(data)
             
        this.props.history.push('/espacePerso/profil');
       
      })
      .catch( err => this.setState({error: "error"}) )
    }
  

  
  handleChangeProfil = (event) => {  
    const {name, value} = event.target;
  
    this.setState({[name]: value});
}
  
  render(){
    return (
      <div>
      <NavBar/>
      <div className="editProfil">
      <div className="espacePerso">
        <div className="navbarEspacePerso">
          <NavBarEspacePerso user={this.props.user} history={this.props.history}/>
        </div>

        <div className="partieDroiteEspacePerso">
          <h1 className="editProfilTitre">Mettre à jour mes coordonnées</h1>
          <form onSubmit={this.handleFormSubmit}>
              {this.state.error && (
                <p className="error">{this.state.error}</p>
              )}
              <div className="libelleInput">
                <label>email :</label>
                <input type="email" name="email" value={this.state.email} onChange={e => this.handleChangeProfil(e)}/>
              </div>
              <div className="libelleInput">
                <label>rue:</label>
                <input type="text" name="rue" value={this.state.rue} onChange={e => this.handleChangeProfil(e)} />
              </div>
              <div className="libelleInput">
                <label>code Postal  :</label>
                <input type="text" name="codePostal" value={this.state.codePostal} onChange={e => this.handleChangeProfil(e)} />
              </div>
              <div className="libelleInput">
                <label>ville:</label>
                <input type="text" name="ville" value={this.state.ville} onChange={e => this.handleChangeProfil(e)} />
              </div>
              <div className="libelleInput">
                <label>telephone1:</label>
                <input type="text" name="telephone1" value={this.state.telephone1} onChange={e => this.handleChangeProfil(e)} />
              </div>
              <div className="libelleInput">
                <label>telephone2:</label>
                <input type="text" name="telephone2" value={this.state.telephone2} onChange={e => this.handleChangeProfil(e)} />
              </div>
              <input id="button" type="submit" value="Enregistrer les modifications" />
             </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default EditProfil;