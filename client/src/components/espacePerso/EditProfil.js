import React, { Component } from 'react';
import axios from 'axios';

class EditProfil extends Component {
  state= {
    email: this.props.user.email,
    rue: this.props.user.rue,
    codePostal: this.props.user.codePostal,
    ville: this.props.user.ville,
    telephone1:this.props.user.telephone1,
    telephone2:this.props.user.telephone2
  }
  

    
  handleFormSubmit = (event) => {
    const email= this.state.user.email;
    const rue= this.state.user.rue;
    const codePostal= this.state.user.codePostal;
    const ville= this.state.user.ville;
    const telephone1=this.state.user.telephone1;
    const telephone2=this.state.user.telephone2;
   
     

    event.preventDefault();

    axios.put("http://localhost:5000/user", { email, rue,codePostal, ville, telephone1, telephone2 })
    .then( () => {
          this.props.history.push('/profil');    
    })
    .catch( error => console.log(error) )
  }

  handleChangeProfil = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
}
  


  render(){
    return (
      <div>
        <hr />
        <h3>Edit Profil</h3>
        <form onSubmit={this.handleFormSubmit}>
          <label>email :</label>
          <input type="email" name="email" value={this.state.email} onChange={e => this.handleChangeProfil(e)}/>
          <label>rue:</label>
          <input type="text" name="rue" value={this.state.rue} onChange={e => this.handleChangeProfil(e)} />
          <label>code Postal  :</label>
          <input type="text" name="codePostal  " value={this.state.codePostal  } onChange={e => this.handleChangeProfil(e)} />
           <label>ville:</label>
          <input type="text" name="ville" value={this.state.ville} onChange={e => this.handleChangeProfil(e)} />
          <label>telephone1:</label>
          <input type="text" name="telephone1" value={this.state.telephone1} onChange={e => this.handleChangeProfil(e)} />
           <label>telephone2:</label>
          <input type="text" name="telephone2" value={this.state.telephone2} onChange={e => this.handleChangeProfil(e)} />
          <input type="submit" value="Submit" />
        
        </form>

   
      </div>
    )
  }

}
export default EditProfil;