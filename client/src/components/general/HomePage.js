import React, {Component} from 'react'
import ProfsList from './ProfsList.js'


class HomePage extends Component {
    
   
    
    render () {
     
        return (
            <div className="homePage">
                <div className="navbar"></div>
                <div className="accueil">
                    
                    <h1>Bienvenue sur le site des Trembles</h1>
                    <h1>Association de danse à partir de 3ans</h1>
                    <h1>à Tremblay en France</h1>

                </div>
               
                <ProfsList/>
               

            </div>
        );
    }
}


export default HomePage;