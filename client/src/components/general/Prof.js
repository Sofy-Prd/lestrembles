import React, {Component} from 'react'
import Modal from "react-responsive-modal";

const styles = {
    fontFamily: "Montserrat",
    textAlign: "center",
    color:"red"
  };
  
  

class Prof extends Component {
    state = {open: false };
   
    onOpenModal = () => {
        this.setState({ open: true });
      };
    
      onCloseModal = () => {
        this.setState({ open: false });
      };
    
     
    render () {
        const {open} = this.state;
        return (
            <div >
                <h2>{this.props.prenom}</h2>
                <img onClick={this.onOpenModal} src={this.props.photoProfil} alt="" />
                <h3>{this.props.style}</h3>

                <div style={styles}>

                 <Modal open={open} onClose={this.onCloseModal}>
                    {/* <h2>{this.props.prenom}</h2> */}
                    <div style={{display:"flex", alignItems:"center"}}>
                        <img style={{display:"block", height:"50vh", width: "40%",objectFit: "cover"}} src={this.props.photoProfil} alt=""/>
                        <p style={{width: "60%", paddingLeft:"2em"}}>{this.props.citation}</p>
                    </div>
                </Modal>
                 </div>
            </div>
        );
    }
}


export default Prof;