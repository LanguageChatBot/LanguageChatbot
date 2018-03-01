const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const brainSchema = new Schema({

  tag:[String],
  question:[{value:String,tag:String}],
  answer:[{value:String,tag:String}],
  reply:[{value:String,tag:String}]
}
);

const Brain = mongoose.model('Brain', brainSchema);
module.exports = Brain;