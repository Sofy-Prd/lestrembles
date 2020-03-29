import React, {Component} from 'react';
import axios from 'axios'
import Cours from './Cours.js'


class CoursList extends Component {
    state = { listOfCours: [] };
   
    getAllCours = () =>{
        axios.get(`${process.env.REACT_APP_APIURL || ""}/api/courses`)
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
          <div id="cours" className="coursContainer">
              <div className="coursListTitre">
                <h1>Les Cours</h1>
              </div>

                <div className="coursList">
                         
                   {this.state.listOfCours.map(cours => (
                      <div className="cours" key={cours._id}><Cours nom={cours.nom} jour={cours.jour} horaire={cours.horaire} lieu={cours.lieu} prof={cours.prof} public={cours.public}/></div>
                    ))}
               </div>
          </div>
        );
    }
}


export default CoursList;