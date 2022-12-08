const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
  ticket: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Ticket',
  },
  text: {
    type: String,
    required: [true, 'Please add some text'],
    
  },
  isStaff: {
    type: String,
    required: false
  },
  staffId: {
    type: String
  },
},{
    timestamps: true,
});

module.exports = mongoose.model('Note', noteSchema)