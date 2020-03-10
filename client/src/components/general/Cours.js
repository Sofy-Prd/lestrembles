import React, {Component} from 'react';





class Cours extends Component {

    
    render () {
     
        return (
            <div className="Cours">
                <h2>Nom du cours : {this.props.nom}</h2>
                <p>le {this.props.jour} de {this.props.horaire}</p>
                <p> lieu : {this.props.lieu.nom}</p>
                <p> avec {this.props.prof.prenom}</p>

            
            </div>
        );
    }
}

export default Cours;