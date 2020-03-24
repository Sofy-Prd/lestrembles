import axios from 'axios';

class MailService {
  constructor() {
    this.service = axios.create({
      baseURL: `${process.env.REACT_APP_APIURL || ""}/api`,
      withCredentials: true//
    });
  }
  
  sendAbsence = (profEmail, message,prenom, nom, date) => {
    return this.service.put('/user/adherents/:id/sendAbsences', {profEmail, message,prenom, nom, date})
    .then(response => response.data)
  }
  sendInvoice = (email, subject, prenom, nom, tarif, date) => {
    return this.service.put('/user/adherents/:id/sendInvoices', {email, subject, prenom, nom, tarif, date})
    .then(response => response.data)
  }
}
  

export default MailService;