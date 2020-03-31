import React, {Component} from 'react';

class NavBar extends Component {
  
    render () {
 
        return (
            <div className="navBarResp">
                <header class="header">
                    <div className="navBar">
                        {/* <div className="navBarFlex"> */}
                            <div className="logo">
                                <div className="leftNavBar">
                                    <img src="/images/logoALT.png" alt=""/>
                                    <a href="/"><h1>ALT</h1></a>
                                </div>
                            </div> 
                            <div className="hamburger">
                                <input class="menu-btn" type="checkbox" id="menu-btn" />
                                <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
                           
                            <ul className="menu">
                                <li><a href="/#profs"><span>Les Profs</span></a></li>
                                <li><a href="/#cours"><span>Les Cours</span></a></li>
                                <li><a href="/#tarifs"><span>Les Tarifs</span></a></li>
                                <li><a href="/#spectacles"><span>Les Spectacles</span></a></li>
                                <li><a href="/#asso"><span>L'Asso</span></a></li>
                                <li><a href="/espacePerso"><span>Espace Adhérent</span></a></li>
                            
                            </ul>      
                            </div>        
                        {/* </div> */}
                    </div>
            </header> 
            </div>
        );
    }
}

export default NavBar;

