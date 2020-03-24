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
                    <Slide src="https://res.cloudinary.com/dvprnqqgl/image/upload/v1585041351/lestrembles/spectacle2019/diapoPortrait/65158222_2257813344547411_4781144429832437760_n_g3kahd.jpg" />
                    <Slide src="https://res.cloudinary.com/dvprnqqgl/image/upload/v1585041351/lestrembles/spectacle2019/diapoPortrait/65122267_2257810334547712_6032569596328804352_n_jouypx.jpg" />
                    <Slide src="https://res.cloudinary.com/dvprnqqgl/image/upload/v1585041351/lestrembles/spectacle2019/diapoPortrait/65392306_2260525934276152_157842723892625408_n_ycu955.jpg" />
                    <Slide src="https://res.cloudinary.com/dvprnqqgl/image/upload/v1585041351/lestrembles/spectacle2019/diapoPortrait/65418585_2260525760942836_6843584598635446272_n_qoubgn.jpg" />
                    <Slide src="https://res.cloudinary.com/dvprnqqgl/image/upload/v1585041351/lestrembles/spectacle2019/diapoPortrait/65367762_2257810941214318_915221620556038144_n_ao9nhg.jpg" />
                    <Slide src="https://res.cloudinary.com/dvprnqqgl/image/upload/v1585041351/lestrembles/spectacle2019/diapoPortrait/65325344_2257810277881051_620967161929662464_n_1_dvorbm.jpg" />
                    <Slide src="https://res.cloudinary.com/dvprnqqgl/image/upload/v1585041351/lestrembles/spectacle2019/diapoPortrait/65309404_2260526654276080_9112238005724119040_n_w0diqz.jpg" />
                    <Slide src="https://res.cloudinary.com/dvprnqqgl/image/upload/v1585041351/lestrembles/spectacle2019/diapoPortrait/65325344_2257810277881051_620967161929662464_n_hye4is.jpg" />
                    <Slide src="https://res.cloudinary.com/dvprnqqgl/image/upload/v1585041351/lestrembles/spectacle2019/diapoPortrait/65312187_2257811177880961_1114377995646140416_n_sw1b7w.jpg" />
                    <Slide src="https://res.cloudinary.com/dvprnqqgl/image/upload/v1585041350/lestrembles/spectacle2019/diapoPortrait/66039247_2257810831214329_3433891950187511808_n_qplqnx.jpg" />
                    <Slide src="https://res.cloudinary.com/dvprnqqgl/image/upload/v1585041350/lestrembles/spectacle2019/diapoPortrait/65755424_2257810674547678_4838736853190311936_n_sodpfi.jpg" />
                    <Slide src="https://res.cloudinary.com/dvprnqqgl/image/upload/v1585041350/lestrembles/spectacle2019/diapoPortrait/65870616_2260526097609469_2696550914205941760_n_kl5mex.jpg" />
                    <Slide src="https://res.cloudinary.com/dvprnqqgl/image/upload/v1585041350/lestrembles/spectacle2019/diapoPortrait/65466478_2257813591214053_6196187865823576064_n_maxz1o.jpg" />
                 
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