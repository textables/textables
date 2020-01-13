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

schema.virtuals('texts', {
  ref: 'Text',
  localField: '_id',
  foreignField: 'source'
});

schema.virtual('fullname').get(()=> {
  return this.fullname = `${this.firstName} ${this.lastName}`;
});

module.exports = mongoose.model('Source', schema);
