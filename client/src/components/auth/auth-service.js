import axios from 'axios';

class AuthService {
  constructor() {
    this.service = axios.create({
      baseURL: `${process.env.REACT_APP_APIURL || ""}/api`,
      withCredentials: true//
    });
  }
  
  login = (username, password) => {
    return this.service.post('/sessions', {username, password})
    .then(response => response.data)
  }

  changePassword(password1, password2) {
    return this.service.put('/changePassword', {
      password1,
      password2
    })
      .then(response => response.data)
  }

  editProfil(userId, email, rue,codePostal, ville, telephone1, telephone2 ) {
    return this.service.put('/user', {
      userId, email, rue,codePostal, ville, telephone1, telephone2
    })
      .then(response => response.data)
  }

  changePasswordByMail(password1, password2) {
    return this.service.post('/changePasswordByMail/:token', {
      password1,
      password2
    })
      .then(response => response.data)
  }

  forgotPassword(email) {
    return this.service.post('/forgotPassword', {
      email
    })
      .then(response => response.data)
  }
  
   
  logout = () => {
    return this.service.post('/logout', {})
    .then(response => response.data)
  }
  
  loggedin = () => {
    return this.service.get('/loggedin').then(response => response.data)
  }

}

export default AuthService;