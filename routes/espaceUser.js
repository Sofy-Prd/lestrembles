const express = require('express');
const router  = express.Router();
// const nodemailer  = require('nodemailer');
// const templates = require('../templates/template');
// const { google } = require("googleapis");
// const OAuth2 = google.auth.OAuth2;
// const oauth2Client = new OAuth2(
//   process.env.ClientID,
//   process.env.ClientSecret,
//   "https://developers.google.com/oauthplayground"
// );
// const smtpTransport = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//        type: "OAuth2",
//        user: "associationlestrembles@gmail.com", 
//        clientId: process.env.ClientID,
//        clientSecret: process.env.ClientSecret,
//        refreshToken: process.env.RefreshToken,
//        accessToken: process.env.AccessToken
//   }
// });
// oauth2Client.setCredentials({
//   refresh_token: "1//04O1JtOIXrEHlCgYIARAAGAQSNwF-L9IrKvETwC2gOcc0fuFbcR2iB1vhIItEJ9g-Oa3Sej-eQKlcrvGp5yFIRiajoS1t8zHKXq8"
// });
// const accessToken = oauth2Client.getAccessToken();

// // absence

// // router.post("/adherents/:id/sendAbsences", (req, res, next) => {
//   // let email = req.body.profEmail;
//   // let message = req.body.message;
//   // let prenom = req.body.prenom;

//   // let nom = req.body.nom;
//   // let date = req.body.date;
//   // let subject = `Absence de ${prenom} ${nom} le ${date}`;
//   // smtpTransport.sendMail({
//   //   from: 'associationlestrembles@gmail.com',
//   //   to: email, 
//   //   subject: subject, 
//   //   text: message,
//   //   html: `<b>${message}</b>`
//   // })
//   // .then(info => res.redirect("/mon-accueil"))
//   // .catch(error => console.log(error));
// // });

















module.exports = router;