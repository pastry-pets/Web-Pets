const mongoose = require('mongoose');

// TODO: organization - should User and Credential be in their own files? probably

// TODO: some way to wait for connection
mongoose.connect('mongodb://127.0.0.1:27017/webpets')
  .then(() => {
    console.info('Connected to the database.');
    return;
  });

const userSchema = new mongoose.Schema({
  name: String
});

const User = mongoose.model('User', userSchema);

// TODO: this should probably involve populate somehow because userId should refer to a User entry
const credentialSchema = new mongoose.Schema({
  userId: String,
  provider: String,
  subject: String
});

const Credential = mongoose.model('Credential', credentialSchema);

module.exports = {
  User,
  Credential
};
