import React, {Component} from 'react';
import axios from 'axios'
import Cours from './Cours.js'


class CoursNavBarMobile extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      listOfCours: [],
      nom:"Eveil",
      jour:'Samedi',
      horaire:'10H30-11H30',
      lieu: {nom:'Salle des associations'},
      prof:{prenom:'Lucile'},
      public:'enfants nés en 2015'
       };
     
       
      }
    
    getAllCours = () =>{
        axios.get(`${process.env.REACT_APP_APIURL || ""}/api/courses`)
        .then(responseFromApi => {
          this.setState({
            listOfCours: responseFromApi.data
          })
        })
      }

    componentDidMount() {
    this.getAllCours();
    }

    
   
    handleClick = (c) => {
       this.setState({
        nom:c.nom,
        jour:c.jour,
        horaire:c.horaire,
        lieu: c.lieu,
        prof:c.prof,
        public:c.public
      }) 
  
    }           
    render () {
     
    
      return (
        <div className="coursNavBarMobile">
          <div className="coursListTitreMobile">
            <h1>Les Cours</h1>
          </div>
          <div className="navBarMobileFlex">
            <div className="coursListMobile">
          
              {this.state.listOfCours.map(cours => (
                  <div className="coursLiens" key={cours._id}>
                  {/* <p>{cours.nom}</p> */}
                  <button onClick={() => this.handleClick(cours)}>{cours.nom}</button>
                  </div>
              ))}
            </div>
            <div className="coursMobile">
              <Cours nom={this.state.nom} jour={this.state.jour} horaire={this.state.horaire} lieu={this.state.lieu} prof={this.state.prof} public={this.state.public}/>
            </div>
          </div>
        </div>

             
          
        );
    }
}


export default CoursNavBarMobile;