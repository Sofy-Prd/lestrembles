import React, {Component} from 'react'


class Prof extends Component {
    
   
    render () {
     
        return (
            <div>

                <h1>{this.props.prenom}</h1>
                <img src={this.props.photoProfil} alt="" />
                <h2>{this.props.style}</h2>
                    
    
                
            </div>
        );
    }
}


export default Prof;