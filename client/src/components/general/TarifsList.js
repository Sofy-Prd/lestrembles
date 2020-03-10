import React, {Component} from 'react';
import axios from 'axios'
import Tarif from './Tarif.js'


class TarifsList extends Component {
    state = { listOfTarifs: [] };
   
    getAllTarifs = () =>{
        axios.get(`http://localhost:5000/api/prices`)
        .then(responseFromApi => {
          this.setState({
            listOfTarifs: responseFromApi.data
          })
        })
      }
      
    componentDidMount() {
    this.getAllTarifs();
    }
    
    render () {
     
        return (
            <div className="TarifsList">
                <h1>Les tarifs</h1>
                    <ul>
                        {this.state.listOfTarifs.map(tarif => (
                            <li key={tarif._id}><Tarif duree={tarif.duree} montant={tarif.montant}/></li>
                            ))}
                    </ul> 
            </div>
        );
    }
}


export default TarifsList;