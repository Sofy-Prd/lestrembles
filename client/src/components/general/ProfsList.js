import React, {Component} from 'react'
import Prof from './Prof.js'
import axios from 'axios'

class ProfsList extends Component {
    state = { listOfProfs: [] };
   
    getAllProfs = () =>{
        axios.get(`http://localhost:5000/api/teachers`)
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
            <div className="profsList">
                
               
                  
                        {this.state.listOfProfs.map(prof => (
                            <div className="prof" key={prof._id}><Prof prenom={prof.prenom} photoProfil={prof.photoProfil} style={prof.style}/></div>
                            ))}
                   
                
            </div>
        );
    }
}


export default ProfsList;