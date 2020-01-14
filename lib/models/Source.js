const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  }
},
{
  toJSON: {
    virtuals: true
  }
});

schema.virtual('texts', {
  ref: 'Text',
  localField: '_id',
  foreignField: 'source'
});


module.exports = mongoose.model('Source', schema);

