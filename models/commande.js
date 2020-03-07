mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommandeSchema = new Schema({
    numCommande: Number,
    user: [{type: Schema.Types.ObjectId, ref: 'User'}],
    nbPlacesAprem: Number,
    nbPlacesSoir: Number,
    nbPlaceSuppAprem: Number,
    nbPlaceSuppSoir: Number,
    montant: Number,
    modePaiement: { type: String, enum : [ 'Paypal', 'Espèces']}
});

const Commande = mongoose.model('Commande', CommandeSchema);

module.exports = Commande;