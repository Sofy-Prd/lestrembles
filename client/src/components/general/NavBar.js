import React, {Component} from 'react';

class NavBar extends Component {
  
    render () {
 
        return (
            <div className="navBar">
                <div className="leftNavBar">
                    <img src="/images/logoALT.png" alt=""/>
                    <a href="/"><h1>ALT</h1></a>
                </div>
                <div className="rightNavBar">
                    <a href="/#profs"><span>Les Profs</span></a>
                    <a href="/#cours"><span>Les Cours</span></a>
                    <a href="/#tarifs"><span>Les Tarifs</span></a>
                    <a href="/#spectacles"><span>Les Spectacles</span></a>
                    <a href="/#asso"><span>L'Asso</span></a>
                    <a href="/espacePerso"><span>Espace Adhérent</span></a>
                </div>              
            </div>
        );
    }
}

export default NavBar;

