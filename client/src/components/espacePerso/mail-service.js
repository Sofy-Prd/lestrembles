import axios from 'axios';

class MailService {
  constructor() {
    this.service = axios.create({
      baseURL: 'http://localhost:5000/api',
      withCredentials: true//
    });
  }
  
  sendAbsence = (profEmail, message,prenom, nom, date) => {
    return this.service.put('/user/adherents/:id/sendAbsences', {profEmail, message,prenom, nom, date})
    .then(response => response.data)
  }
}
  

export default MailService;