const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: String,
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

schema.virtual('fullName')
  .get(function() {
    return `${this.firstName} ${this.lastName}`;
    
  });

module.exports = mongoose.model('Source', schema);

