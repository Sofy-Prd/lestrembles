import React, {Component} from 'react'


class Prof extends Component {
    
   
    render () {
     
        return (
            <div>
                <h2>{this.props.prenom}</h2>
                <img src={this.props.photoProfil} alt="" />
                <h3>{this.props.style}</h3>
            </div>
        );
    }
}


export default Prof;