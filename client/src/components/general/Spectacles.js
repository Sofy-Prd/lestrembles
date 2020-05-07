import React, {Component} from 'react';
import Slider from "react-slick";

class Spectacles extends Component {
   
    render () {
       
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay:true,
            autoplaySpeed:1500,
           
          };

        return (
            <div className="spectacles">
                 <div id="spectacles" className="spectaclesTitre">
                   <h1>Les Spectacles</h1>
                </div>

                <div className="sliders">
                  <div>
                    <Slider {...settings}>
                        <div>
                          <img src="https://res.cloudinary.com/dvprnqqgl/image/upload/v1585041351/lestrembles/spectacle2019/diapoPortrait/65158222_2257813344547411_4781144429832437760_n_g3kahd.jpg" alt="" />
                        </div>
                        <div>
                          <img src="https://res.cloudinary.com/dvprnqqgl/image/upload/v1585041351/lestrembles/spectacle2019/diapoPortrait/65122267_2257810334547712_6032569596328804352_n_jouypx.jpg" alt="" />
                        </div>
                        <div>
                         <img src="https://res.cloudinary.com/dvprnqqgl/image/upload/v1585041351/lestrembles/spectacle2019/diapoPortrait/65392306_2260525934276152_157842723892625408_n_ycu955.jpg" alt="" />
                        </div>
                        <div>
                         <img src="https://res.cloudinary.com/dvprnqqgl/image/upload/v1585041351/lestrembles/spectacle2019/diapoPortrait/65418585_2260525760942836_6843584598635446272_n_qoubgn.jpg" alt="" />
                        </div>
                        <div>
                         <img src="https://res.cloudinary.com/dvprnqqgl/image/upload/v1585041351/lestrembles/spectacle2019/diapoPortrait/65312187_2257811177880961_1114377995646140416_n_sw1b7w.jpg" alt="" />
                        </div>
                        <div>
                        <img src="https://res.cloudinary.com/dvprnqqgl/image/upload/v1585041351/lestrembles/spectacle2019/diapoPortrait/65325344_2257810277881051_620967161929662464_n_hye4is.jpg" alt="" />
                        </div>
                        <div>
                         <img src="https://res.cloudinary.com/dvprnqqgl/image/upload/v1585041350/lestrembles/spectacle2019/diapoPortrait/66039247_2257810831214329_3433891950187511808_n_qplqnx.jpg" alt="" />
                        </div>
                        <div>
                         <img src="https://res.cloudinary.com/dvprnqqgl/image/upload/v1585041350/lestrembles/spectacle2019/diapoPortrait/65755424_2257810674547678_4838736853190311936_n_sodpfi.jpg" alt="" />
                        </div>
                        <div>
                          <img src="https://res.cloudinary.com/dvprnqqgl/image/upload/v1585041350/lestrembles/spectacle2019/diapoPortrait/65870616_2260526097609469_2696550914205941760_n_kl5mex.jpg" alt="" />
                        </div>
                        <div>
                          <img src="https://res.cloudinary.com/dvprnqqgl/image/upload/v1585041350/lestrembles/spectacle2019/diapoPortrait/65466478_2257813591214053_6196187865823576064_n_maxz1o.jpg" alt="" />
                        </div>
                    </Slider>
                  </div>
               </div>
             </div>
         );
    }
}

export default Spectacles;