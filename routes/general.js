const express = require('express');
// const mongoose = require('mongoose');
const router  = express.Router();
const Cours = require('../models/cours');
const Prof = require('../models/prof');
const Tarif = require('../models/tarif');
const Lieu = require('../models/lieu');







//les tarifs
router.get('/tarifs', (req, res, next) => {
  Tarif.find()
  .then(allTheTarifs => {
    res.json(allTheTarifs);
  })
  .catch(err => {
    res.json(err);
  })
});

//les profs
router.get('/professeurs', (req, res, next) => {
  Prof.find()
  .then(allTheProfs => {
    res.json(allTheProfs);
  })
  .catch(err => {
    res.json(err);
  })
});


//les cours
router.get('/cours', (req, res, next) => {
  Cours.find()
  // .populate({
  //   path: 'prof',
  //   populate: {
  //     path: 'prof'
  //   }
  // })
  // .populate({
  //   path: 'lieu',
  //   populate: {
  //     path: 'lieu'
  //   }
  // })

    .populate('prof')
    .populate('lieu')
    .then(allTheCours => {
      res.json(allTheCours);
    })
    .catch(err => {
      res.json(err);
    })
});












module.exports = router;