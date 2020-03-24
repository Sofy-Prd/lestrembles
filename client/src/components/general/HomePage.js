import React, {Component} from 'react'
import ProfsList from './ProfsList.js'
import CoursList from './CoursList.js'
import TarifsList from './TarifsList.js'
import Spectacles from './Spectacles.js'
import Footer from './Footer.js'



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
                <div className="backgroundWhitePink">
                <CoursList/>
                <TarifsList/>
                <Spectacles/>
                <Footer/>
                </div>
               

            </div>
        );
    }
}


export default HomePage;