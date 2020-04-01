import React, {Component} from 'react';

class NavBar extends Component {
    checkbox = React.createRef();

    uncheckbox = () => {
      const $el = this.checkbox.current;
      $el.checked = false;
    }

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
                                <input class="menu-btn" type="checkbox" id="menu-btn" ref={this.checkbox} />
                                <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
                           
                            <ul className="menu">
                                <li><a href="/#profs" onClick={this.uncheckbox}><span>Les Profs</span></a></li>
                                <li><a href="/#cours" onClick={this.uncheckbox}><span>Les Cours</span></a></li>
                                <li><a href="/#tarifs" onClick={this.uncheckbox}><span>Les Tarifs</span></a></li>
                                <li><a href="/#spectacles" onClick={this.uncheckbox}><span>Les Spectacles</span></a></li>
                                <li><a href="/#asso" onClick={this.uncheckbox}><span>L'Asso</span></a></li>
                                <li><a href="/espacePerso" onClick={this.uncheckbox}n><span>Espace Adhérent</span></a></li>
                            
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

