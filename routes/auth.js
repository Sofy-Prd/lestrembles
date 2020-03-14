const express    = require('express');
const authRoutes = express.Router();

const passport   = require('passport');
const bcrypt     = require('bcryptjs');
var async = require('async');
var crypto = require('crypto');
const nodemailer  = require('nodemailer');
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const oauth2Client = new OAuth2(
  process.env.ClientID,
  process.env.ClientSecret,
  "https://developers.google.com/oauthplayground"
);
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
oauth2Client.setCredentials({
  refresh_token: process.env.RefreshToken
});
const accessToken = oauth2Client.getAccessToken();

// require the user model !!!!
const User       = require('../models/user');


function getUserPopulated(userid) {
  return User.find().populate()
}

//LOGIN
authRoutes.post('/sessions', (req, res, next) => {
    passport.authenticate('local', (err, theUser, failureDetails) => {
        if (err) {
            res.status(500).json({ message: 'Il y a eu un problème avec l\'authentification' });
            return;
        }
    
        if (!theUser) {
            // "failureDetails" contains the error messages
            // from our logic in "LocalStrategy" { message: '...' }.
            res.status(401).json(failureDetails);
            return;
        }

        // save user in session
        req.login(theUser, (err) => {
            if (err) {
                res.status(500).json({ message: 'Session save went bad.' });
                return;
            }

            getUserPopulated(req.user.id).then()

            User.find()
            
            theUser
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
            }, (err, theUserPopulated) => {
              if (err) {
                return res.status(500).json({message: err.message})
              }
              res.json(theUserPopulated)
            })
        });
    })(req, res, next);
});

//LOGOUT
authRoutes.post('/logout', (req, res, next) => {
    // req.logout() is defined by passport
    req.logout();
    res.status(200).json({ message: 'Deconnexion réussie!' });
});

//LOGGEDIN  pour vérifier si déjà loggué

authRoutes.get('/loggedin', (req, res, next) => {
    // req.isAuthenticated() is defined by passport
    if (req.isAuthenticated()) {
        res.status(200).json(req.user);
        return;
    }
    res.status(403).json({ message: 'Vous n\'êtes pas autorisé' });
});

//CHANGE PASSWORD
authRoutes.put('/changePassword', (req, res, next) => {
    if (!req.user) {
        res.status(401).json({
          message: "Vous devez être connecté pour pouvoir modifier votre mot de passe"
        });
        return;
    } 
   
    const password1 = req.body.password1;
    const password2 = req.body.password2;
    const salt = bcrypt.genSaltSync(10);
    
    //Check password1 and password2 are not empty
    if (password1 === "" || password2 === "" ) {
                res.status(400).json({ message: 'le mot de passe ne peut être vide' });
                return;
            }
    //on verifie que les deux mdp sont identiques
    if (password1 !== password2) {
                res.status(400).json({ message: 'les mots de passe ne sont pas identiques' });
                return;
            }
    const hashPassNew = bcrypt.hashSync(password1, salt);
    const user = req.user;
    user.modifPwd = false;
    user.password = hashPassNew;

    user.save(err => {
        if (err) {
            res.status(400).json({ message: 'il y a eu un problème, le nouveau mot de passe n\'a pas été enregistré' });
            return;
        }

        res.status(200).json({ message: 'le nouveau mot de passe a bien été enregistré!' });

      })
});

//envoi d'un email pour reinitiliser le mot de passe 
authRoutes.post('/forgotPassword', (req, res, next) => {
    async.waterfall([
      function(done) {
        crypto.randomBytes(20, function(err, buf) {
          var token = buf.toString('hex');
          done(err, token);
        });
      },
      function(token, done) {
        
        User.findOne({ email: req.body.email }, function(err, user) {
          if (!user) {
             res.status(400).json({ message: 'il n\'y a pas de compte associé à cette adresse mail' });
          }
       
          user.resetPasswordToken = token;
          user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
          user.save(function(err) {
            done(err, token, user);
          });
        });
      },
      function(token, user, done) {
        var mailOptions = {
          to: user.email,
          from: 'les Trembles',
          subject: 'Réinitialiser votre Mot de Passe',
          text: 'Vous recevez cet email parce que vous avez demandé la réinitialisation du mot de passe de votre compte.\n\n' +
            'Veuillez cliquer sur le lien suivant ou le coller dans votre navigateur pour terminer le processus :\n\n' +
            'http://localhost:3000/espacePerso/changePasswordByMail/' + token + '\n\n' +
            'Si cette demande ne vient pas de vous, veuillez ignorer cet e-mail et votre mot de passe restera inchangé.\n'
        };
        smtpTransport.sendMail(mailOptions, function(err) {
        //   req.flash('info', 'Un email contenant des informations supplémentaires a été envoyé à : ' + user.email );
          done(err, 'done');
        });
        res.status(200).json({ message: 'l\'email de reinitialisation a été envoyé !' });
      }
    ], function(err) {
            res.status(400).json({ message: 'il y a eu un problème, l\'email n\a pas pu être envoyé' });
            return;
        
    });
});


  //Modifier mdp oublié grâce à un lien contenant le token
  authRoutes.get('/changePasswordByMail/:token', function(req, res) {
    User.findOne({ resetPasswordToken: req.params.token }, function(err, user) {
      if (!user) {
        res.status(400).json({ message: 'le lien a expiré' });
        
      }
      res.status(200).json(user);
    });
  });

  authRoutes.post("/changePasswordByMail/:token", (req, res, next) => { 
    const password1 = req.body.password1;
    const password2 = req.body.password2;
    const salt = bcrypt.genSaltSync(10);
    const hashPassNew = bcrypt.hashSync(req.body.password1, salt);
    //Check password1 and password2 are not empty
      if (password1 === "" || password2 === "" ) {
        res.status(400).json({ message: 'le mot de passe ne peut être vide' });
        return;
      }
    //on verifie que les deux mdp sont identiques
      if (password1 !== password2) {
        res.status(400).json({ message: 'les mots de passe ne sont pas identiques' });
        return;
      }
    async.waterfall([
      User.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function(err, user) {
        if (!user) {
            res.status(400).json({ message:'Le token pour mettre à jour votre mot de passe est invalide ou a expiré.'});
          return res.redirect('/login');
        }
        user.password = hashPassNew;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpires = undefined;
        user.save()
          .then(user => {
            res.status(200).json({ message: 'le nouveau mot de passe a bien été enregistré!' });
          })
        .catch(err => next(err));
      })
    ]);
  });


  //Logout
  authRoutes.delete('/session', (req, res) => {
      req.logout();
      res.redirect('/');
  });

  

module.exports = authRoutes;