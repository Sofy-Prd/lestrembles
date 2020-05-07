const express = require('express');
const router  = express.Router();
const User = require("../models/user");
const nodemailer  = require('nodemailer');
const templates = require('../templates/template');
const { google } = require("googleapis");
// OAuth2 for Gmail
const OAuth2 = google.auth.OAuth2;
const oauth2Client = new OAuth2(
  process.env.ClientID,
  process.env.ClientSecret,
  "https://developers.google.com/oauthplayground"
);

oauth2Client.setCredentials({
  refresh_token: process.env.RefreshToken
});


//Nodemailer
const smtpTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
       type: "OAuth2",
       user: "associationlestrembles@gmail.com", 
       clientId: process.env.ClientID,
       clientSecret: process.env.ClientSecret,
       refreshToken: process.env.RefreshToken,
       accessToken: process.env.AccessToken
  }
});


router.get("/user", (req, res, next) => {
  User.findOne({_id : req.query.userId})
  .populate({
    path: 'adherent.cours1',
    populate: {
      path: 'prof'
    }
  })
  .populate({
    path: 'adherent.cours2',
    populate: {
      path: 'prof'
    }
  })
  .populate({
    path: 'adherent.cours1',
    populate: {
      path: 'lieu'
    }
  })
  .populate({
    path: 'adherent.cours2',
    populate: {
      path: 'lieu'
    }
  })
  .then(function(user){
    res.status(200).json(user);
  })
  .catch(function (err) { 
    next(err);
  });
}); 

// Update User
router.put("/user", (req, res, next) => {
  if (!req.user) {
    res.status(401).json({
    message: "Vous devez être connecté pour modifier vos informations !"
    });
    return;
  }

  User.findByIdAndUpdate(req.body.userId  , { $set : {
    email: req.body.email,
    rue: req.body.rue,
    codePostal: req.body.codePostal,
    ville: req.body.ville,
    telephone1:req.body.telephone1,
    telephone2:req.body.telephone2,
  }
}, {
  new:true
})
    .then(user => {
      user
      .populate({
        path: 'adherent.cours1',
        populate: {
          path: 'prof lieu duree'
        }
      }
      , (err, theUserPopulated) => {
        if (err) {
          return res.status(500).json({message: err.message})
        }
        res.json(theUserPopulated)
      });
     
    })
    .catch(err => next(err))
  ;
});


// Absence
router.put("/user/:name/sendAbsences", (req, res, next) => {
  let email = req.body.profEmail;
  let message = req.body.message;
  let prenom = req.body.prenom;
  let nom = req.body.nom;
  let date = req.body.date;
  let subject = `Absence de ${prenom} ${nom} le ${date}`;
  smtpTransport.sendMail({
    from: 'associationlestrembles@gmail.com',
    to: email, 
    subject: subject, 
    text: message,
    html: `<b>${message}</b>`
  })
  .then(info => res.status(200).json({ message: `L\'email d\'absence a été envoyé` }))
  .catch(error => console.log(error));
});


// Envoi d'un mail Facture à partir d'un template
router.put("/user/adherents/:id/sendInvoices", (req, res) => {
  let email = req.body.email; //req.body.email pour postman
  let prenom = req.body.prenom;
  let nom = req.body.nom;
  let tarif = req.body.tarif;
  let date = req.body.date;
  let subject = `Facture ${prenom} ${nom} ${date}`;
  smtpTransport.sendMail({
    from: 'associationlestrembles@gmail.com',
    to: email, //email user
    subject: subject,  
    text: 'message',
    html: templates.templateExample(prenom, nom, tarif, date)
  })
  .then(info => res.status(200).json({ message: `La facture a été envoyée par email` }))
  .catch(error => console.log(error));
});


module.exports = router;