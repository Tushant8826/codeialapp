const mongoose =  require('mongoose');
mongoose.connect('mongodb://localhost/codeial_development');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'error in connection db:'));
db.once('open', function() {
   console.log('successfully connected to db')
});


module.exports = db;