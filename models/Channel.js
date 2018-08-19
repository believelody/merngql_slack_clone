const mongoose = require('mongoose');
const { Schema } = mongoose;

module.exports = mongoose.model('Channel', new Schema({
  name: { type: String, required: true },
  teamId: { type: Schema.Types.ObjectId, ref: 'Team' },
  public: { type: Boolean, required: true }
}), {
  timestamps: true
});
