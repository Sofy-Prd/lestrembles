import React, {Component} from 'react';

class Cours extends Component {
  
    render () {

          return (
            <div>
                <p className="coursTitre"><span>{this.props.nom}</span> : {this.props.public}</p>
                <div className="coursInfo">
                    <div className="coursSection">
                        <p className="coursLibelle">Jour</p> <p className="coursDetail">{this.props.jour}</p>
                    </div>
                    <div className="coursSection">
                        <p className="coursLibelle">Horaire </p> <p className="coursDetail">{this.props.horaire}</p>
                    </div>
                    <div className="coursSection">
                        <p className="coursLibelle">Salle </p> <p className="coursDetail">{this.props.lieu.nom}</p>
                    </div>
                    <div className="coursSection">
                        <p className="coursLibelle">Prof </p> <p className="coursDetail">{this.props.prof.prenom}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cours;