import React, {Component} from 'react';





class Tarif extends Component {

    
    render () {
     
        return (
            <div className="tarifVerticalCenter">

                 <p className="tarifMontant">{this.props.montant} €</p>
                 <p className="tarifAn">/AN</p>
                <p className="tarifDuree"><span>{this.props.duree}</span> de cours par semaine</p>
               
                           
            </div>
        );
    }
}

export default Tarif;