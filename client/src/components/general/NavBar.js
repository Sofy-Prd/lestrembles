import React, {Component} from 'react';
import { Link } from 'react-router-dom'; 


class NavBar extends Component {
  
    render () {
       
       
       

        return (
            <div className="navBar">
                <div className="leftNavBar">
                    <img src="/images/logoALT.png" alt=""/>
                    <h1>ALT</h1>
                </div>
                <div className="rightNavBar">
                    <a href="/#profs"><span>Les Profs</span></a>
                    <a href="/#cours"><span>Les Cours</span></a>
                    <a href="/#tarifs"><span>Les Tarifs</span></a>
                    <a href="/#spectacles"><span>Les Spectacles</span></a>
                    <a href="/#asso"><span>L'Asso</span></a>

                    <Link to="/espacePerso"><span>Espace Adhérent</span></Link>

                </div>

               
            </div>


        );

    }
}

export default NavBar;

