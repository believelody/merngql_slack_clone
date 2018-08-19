const mongoose = require('mongoose');
const { Schema } = mongoose;

module.exports = mongoose.model('Team', new Schema({
  name: { type: String, required: true },
  owner: { type: Schema.Types.Object, ref: 'User' }
}), {
  timestamps: true
});
