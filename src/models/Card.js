const mongoose    = require("mongoose"),
      { Schema }  = mongoose;
      
const CardSchema = new Schema({
  name: {type: String, required: true},
  quality: {type: String, required: true},
  team: {type: String, required: true},
  pack: {type: String},
  date: {type: Date, default: Date.now()},
  user: {type: String}
});

module.exports = mongoose.model('Note', CardSchema);