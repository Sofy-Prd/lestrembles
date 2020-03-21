import React, {Component} from 'react';
import axios from 'axios'
import Cours from './Cours.js'


class CoursList extends Component {
    state = { listOfCours: [] };
   
    getAllCours = () =>{
        axios.get(`http://localhost:5000/api/courses`)
        .then(responseFromApi => {
          this.setState({
            listOfCours: responseFromApi.data
          })
        })
      }
      
    componentDidMount() {
    this.getAllCours();
    }
    
    render () {
     
        return (
            <div className="coursList">
             
                  
                        {this.state.listOfCours.map(cours => (
                            <div className="cours" key={cours._id}><Cours nom={cours.nom} jour={cours.jour} horaire={cours.horaire} lieu={cours.lieu} prof={cours.prof} public={cours.public}/></div>
                            ))}
                   
            </div>
        );
    }
}


export default CoursList;