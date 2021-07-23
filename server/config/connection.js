const mongoose = require('mongoose');

db = mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/thebaileycafe', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

module.exports = mongoose.connection;
