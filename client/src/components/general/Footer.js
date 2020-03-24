import React, {Component} from 'react';





class Footer extends Component {

    
    render () {
     
        return (
            <div className="footer">
                <div className="footerGauche">
                    <p>Vous avez des questions ?</p>
                    <img src="/images/iconMail.svg" alt=""/>
                    <a href="mailto:associationlestrembles@gmail.com">associationlestrembles@gmail.com</a>
                </div>
                <div className="footerDroite">
                    <p>Retrouvez-nous ici !</p>
                    <div className="footerIcon">
                        <a href="https://www.facebook.com/associationlestrembles/"><img src="/images/iconFacebook.svg" alt=""/></a>
                        <a href="https://www.instagram.com/lestrembles_danse/"><img src="/images/iconInsta.svg" alt=""/></a>
                    </div>                    
                </div>
            </div>
        );
    }
}

export default Footer;