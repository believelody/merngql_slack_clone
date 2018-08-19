const mongoose = require('mongoose');
const { Schema } = mongoose;

module.exports = mongoose.model('Message', new Schema({
  text: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  channelId: { type: Schema.Types.ObjectId, ref: 'Channel' }
}), {
  timestamps: true
});
