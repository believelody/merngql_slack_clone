const mongoose = require('mongoose');
const { Schema } = mongoose;

module.exports = mongoose.model('Member', new Schema({
  userId: { type: Schema.Types.Object, ref: 'User' },
  teamId: { type: Schema.Types.Object, ref: 'Team' }
}), {
  timestamps: true
});
