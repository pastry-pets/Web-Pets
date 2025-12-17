const mongoose = require('mongoose');
const { Schema } = mongoose;

const credentialSchema = new mongoose.Schema({
  userId: {type: Schema.Types.ObjectId, ref: 'User'},
  provider: String,
  subject: String
});

const Credential = mongoose.model('Credential', credentialSchema);

module.exports = Credential;