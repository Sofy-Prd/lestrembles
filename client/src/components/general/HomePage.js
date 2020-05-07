import React, {Component} from 'react'
import ProfsList from './ProfsList.js'
import CountersBan from './CountersBan.js'
import CoursList from './CoursList.js'
import TarifsList from './TarifsList.js'
import Spectacles from './Spectacles.js'
import Footer from './Footer.js'
import NavBar from './NavBar.js'
import CoursNavBarMobile from './CoursNavBarMobile.js'

class HomePage extends Component {
    
    render () {
     
        return (
            <div className="homePage">
                <div className="navbar">
                    <NavBar/>
                </div>
                <div className="accueil">
                    <h1>Bienvenue sur le site des Trembles</h1>
                    <h1>Association de danse à partir de 3 ans</h1>
                    <h1>à Tremblay en France</h1>
                </div>
                <div id="profs">
                    <ProfsList/>
                </div>
                <div className="backgroundWhitePink">
                    <CoursList/>
                    <CoursNavBarMobile/>
                    <TarifsList/>
                    <Spectacles/>
                    <div id="asso">
                        <h1>L'association</h1>
                        <CountersBan/>
                        <p>L’association est née en <b>1969</b> au cœur des « cités des douanes ». Pendant des années, les nombreux accueils ont permis à tous <b>les enfants du quartier</b> d’occuper leurs après-midi et soirées.
                        Le <b>lien social</b> était le premier objectif et il le reste encore aujourd’hui. De <b>nombreux bénévoles</b> ont donné de leur temps et de leur énergie, mais celui qui reste dans nos cœur, même si physiquement il reste loin, c’est <b>Roger Caniou</b>.
                        Aujourd’hui, pour des raisons techniques, nous ne poursuivons que l’activité Danse Modern’Jazz qui rassemble tous les ans entre 130 et 150 danseurs.
                        Nous accueillons les enfants <b>à partir de la 1ère année de maternelle</b> et jusqu’aux cours adultes y compris <b>les débutantes</b>.
                        Il n’y a pas d’examen à passer en fin d’année. Les cours sont regroupés par âge et sont dispensés par des professeurs diplômés d’état.
                        L’association est gérée par les membres du bureau et par un comité de direction (regroupant les bénévoles actifs pour la préparation du spectacle).
                        Notre volonté reste la même :  <b>ASSOCIATIF pour respecter le bien-être des tremblaysiens</b>.
                        Venez nous rejoindre !
                        </p>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}


export default HomePage;