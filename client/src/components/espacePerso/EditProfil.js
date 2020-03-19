import React, { Component } from 'react';
// import axios from 'axios';
import AuthService from '../auth/auth-service';

class EditProfil extends Component {
  state= {
    userId:this.props.family._id,
    email: this.props.family.email,
    rue: this.props.family.rue,
    codePostal: this.props.family.codePostal,
    ville: this.props.family.ville,
    telephone1:this.props.family.telephone1,
    telephone2:this.props.family.telephone2,
    error:""
  }
  
  service = new AuthService();
    
  handleFormSubmit = (event) => {
    console.log("la fonction a été lancée");
    console.log("this.state.user",this.state.user);
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
        console.log("on est entré dans le then");

        // on veut maj le user de App
        this.props.getUser(data)
             
        this.props.history.push('/espacePerso/profil');
        this.props.getFamily();
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
      
        <h3>Edit Profil</h3>
        <form onSubmit={this.handleFormSubmit}>
        {this.state.error && (
                  <p className="error">{this.state.error}</p>
                )}
          <label>email :</label>
          <input type="email" name="email" value={this.state.email} onChange={e => this.handleChangeProfil(e)}/>
          <label>rue:</label>
          <input type="text" name="rue" value={this.state.rue} onChange={e => this.handleChangeProfil(e)} />
          <label>code Postal  :</label>
          <input type="text" name="codePostal" value={this.state.codePostal} onChange={e => this.handleChangeProfil(e)} />
           <label>ville:</label>
          <input type="text" name="ville" value={this.state.ville} onChange={e => this.handleChangeProfil(e)} />
          <label>telephone1:</label>
          <input type="text" name="telephone1" value={this.state.telephone1} onChange={e => this.handleChangeProfil(e)} />
           <label>telephone2:</label>
          <input type="text" name="telephone2" value={this.state.telephone2} onChange={e => this.handleChangeProfil(e)} />
          
          <input type="submit" value="submit" />
        
        </form>

   
      </div>
    );
  }
}
export default EditProfil;