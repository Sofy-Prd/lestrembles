import React, {Component} from 'react';
import ReactSiema from 'react-siema'

const Slide = (props) => <img className="imgSpectacles" {...props} alt="slide" />



class Spectacles extends Component {
    // siema= new Siema();
  

    render () {
       
        let slider;

        return (
            <div className="spectacles">
                <button onClick={() => slider.prev()}><img className="fleche" src="/images/flecheGauche.svg" alt=""/></button>
                <ReactSiema ref={siema => slider = siema}>
                    <Slide src="https://res.cloudinary.com/dvprnqqgl/image/upload/v1584778397/lestrembles/spectacle2019/65158222_2257813344547411_4781144429832437760_n_mmwfba.jpg" />
                    <Slide src="https://res.cloudinary.com/dvprnqqgl/image/upload/v1584778397/lestrembles/spectacle2019/65870616_2260526097609469_2696550914205941760_n_ws2n5n.jpg" />
                    <Slide src="https://res.cloudinary.com/dvprnqqgl/image/upload/v1584778397/lestrembles/spectacle2019/65449636_2260525434276202_3617714037900443648_n_cksgcf.jpg" />
                    <Slide src="https://res.cloudinary.com/dvprnqqgl/image/upload/v1584778398/lestrembles/spectacle2019/65075670_2257811414547604_3143702527782944768_n_apyrc9.jpg" />
                </ReactSiema>
               
                <button onClick={() => slider.next()}><img className="fleche" src="/images/flecheDroite.svg" alt=""/></button>
                {/* <div> <img src="https://res.cloudinary.com/dvprnqqgl/image/upload/v1584778397/lestrembles/spectacle2019/65158222_2257813344547411_4781144429832437760_n_mmwfba.jpg" alt=""/></div>
                <div> <img src="https://res.cloudinary.com/dvprnqqgl/image/upload/v1584778397/lestrembles/spectacle2019/65870616_2260526097609469_2696550914205941760_n_ws2n5n.jpg" alt=""/></div>
                <div> <img src="https://res.cloudinary.com/dvprnqqgl/image/upload/v1584778397/lestrembles/spectacle2019/65449636_2260525434276202_3617714037900443648_n_cksgcf.jpg" alt=""/></div>
                <div> <img src="https://res.cloudinary.com/dvprnqqgl/image/upload/v1584778398/lestrembles/spectacle2019/65075670_2257811414547604_3143702527782944768_n_apyrc9.jpg" alt=""/></div> */}
              
            </div>

          
        );
    }
}

export default Spectacles;