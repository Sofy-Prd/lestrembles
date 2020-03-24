import React, {Component} from 'react'
import Prof from './Prof.js'
import axios from 'axios'

class ProfsList extends Component {
    state = { listOfProfs: [] };
   
    getAllProfs = () =>{
        axios.get(`${process.env.REACT_APP_APIURL || ""}/api/teachers`)
        .then(responseFromApi => {
          this.setState({
            listOfProfs: responseFromApi.data
          })
        })
      }
      
    componentDidMount() {
    this.getAllProfs();
    }
    
   
    render () {
     
        return (
          <div className="profsContainer">
              <div className="profsListTitre">
                <h1>Les Profs</h1>
              </div>
              <div className="profsList">
                {this.state.listOfProfs.map(prof => (
                  <div className="prof" key={prof._id}><Prof prenom={prof.prenom} photoProfil={prof.photoProfil} style={prof.style}/></div>
                  ))}
              </div>
            </div>
           
        );
    }
}


export default ProfsList;