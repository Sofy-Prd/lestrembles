import React, {Component} from 'react';





class Tarif extends Component {

    
    render () {
     
        return (
            <div className="Tarif">
                <h4>Durée : {this.props.duree}</h4>
                <p>{this.props.montant}</p>
                           
            </div>
        );
    }
}

export default Tarif;