mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfSchema = new Schema({
  prenom: String,
  photo: String,
  email: String,
  style: String,
  citation: String
 });

const Prof = mongoose.model('Prof', ProfSchema);

module.exports = Prof;