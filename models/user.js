mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: String,
  password: String,
  modifPwd: Boolean,
  rue: String,
  codePostal: String,
  ville: String,
  telephone1:String,
  telephone2: String,
  email: String,
  adherent: [ 
    {
      prenom: String,
      nom: String,
      dateNaissance: Date,
      cours1: {type: Schema.Types.ObjectId, ref: 'Cours'},
      cours2: {type: Schema.Types.ObjectId, ref: 'Cours'},
      cours1anneeSuivante: {type: Schema.Types.ObjectId, ref: 'Cours'},
      cours2anneeSuivante: {type: Schema.Types.ObjectId, ref:  'Cours'},
    }
  ],
  placesMaxAprem: Number,
  placesMaxSoiree: Number,
  resetPasswordToken: String,
  resetPasswordExpires: Date
}, {
  timestamps: true
});

const User = mongoose.model('User', UserSchema);

module.exports = User;


