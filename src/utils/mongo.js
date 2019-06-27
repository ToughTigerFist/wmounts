const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Mount = new Schema({
    name: {type: String},
    spellId: {type: String},
    creatureId: {type: String},
    itemId: {type: String},
    qualityId: {type: String},
    icon: {type: String},
    isGround: {type: Boolean},
    isFlying: {type: Boolean},
    isAquatic: {trutype: Boolean},
    isJumping: {type: Boolean}
},{
    collection: 'mounts'
});

module.exports = mongoose.model('Mount', Mount);