import React, {Component} from 'react'
import Prof from './Prof.js'
import axios from 'axios'
import Slider from "react-slick";





class ProfsList extends Component {
    state = { listOfProfs: []};
   
  
    getAllProfs = () =>{
        axios.get(`${process.env.REACT_APP_APIURL || ""}/api/teachers`)
        .then(responseFromApi => {
          this.setState({
            listOfProfs: responseFromApi.data
          })
        })
      }
      
    componentDidMount() {
    this.getAllProfs();
    }
    
   
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
          <div className="profsContainer">
              <div className="profsListTitre">
                <h1>Les Profs</h1>
              </div>
              <div className="profsListDesktop">
                {this.state.listOfProfs.map(prof => (
                  <div className="prof" key={prof._id}><Prof prenom={prof.prenom} photoProfil={prof.photoProfil} style={prof.style} citation={prof.citation}/></div>
                  ))}
              </div>
           
           <div className="profsListMobile">      
          <Slider {...settings}> 
           <div>
             <h2>Lucile</h2>
              <img src="https://res.cloudinary.com/dkwcrwudm/image/upload/v1577801087/Projet2%20-%20Les%20Trembles/lucile_gp5qik.jpg" alt="" />
              <h3>Modern</h3>
            </div>
            <div>
            <h2>Claudia</h2>
              <img src="https://res.cloudinary.com/dkwcrwudm/image/upload/v1577801087/Projet2%20-%20Les%20Trembles/claudia_luyrvd.jpg" alt="" />
              <h3>Modern</h3>
            </div>
            <div>
             <h2>Angelina</h2>
             <img src="https://res.cloudinary.com/dkwcrwudm/image/upload/v1577801087/Projet2%20-%20Les%20Trembles/angelina_xpncys.jpg" alt="" />
              <h3>Afrovibe</h3>
            </div>
            <div>
             <h2>Cassandre</h2>
             <img src="https://res.cloudinary.com/dkwcrwudm/image/upload/v1577801086/Projet2%20-%20Les%20Trembles/cassandre_jqhpd3.jpg" alt="" />
              <h3>Dancehall</h3>
            </div>
            <div>
             <h2>Marie</h2>
             <img src="https://res.cloudinary.com/dkwcrwudm/image/upload/v1577801084/Projet2%20-%20Les%20Trembles/marie_cpsbyc.jpg" alt="" />
              <h3>Street-Jazz</h3>
            </div>
           </Slider> 
           </div>

          </div>
           
        );
    }
}


export default ProfsList;