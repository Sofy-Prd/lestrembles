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
            <div className="CoursList">
                <h1>Répartition des cours pour l'année 2019 2020</h1>
                    <ul>
                        {this.state.listOfCours.map(cours => (
                            <li key={cours._id}><Cours nom={cours.nom} jour={cours.jour} horaire={cours.horaire} lieu={cours.lieu} prof={cours.prof}/></li>
                            ))}
                    </ul> 
            </div>
        );
    }
}


export default CoursList;