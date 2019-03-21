const constants = require('../utils/constants')
const mongoose = require('mongoose')

// const dbUrl = constants.db.username + ':'+ constants.db.password + '@' + constants.db.ip + ':' + constants.db.port + '/' + constants.db.dbName
// const dbUrl = 'mongodb://localhost:27017/clm';
const dbUrl = 'mongodb://'+ constants.mongodb.username + ':'+ constants.mongodb.password  + '@'+ constants.mongodb.ip + ':' + constants.mongodb.port + '/' + constants.mongodb.dbName
mongoose.connect(dbUrl,{
    useNewUrlParser: true 
});

mongoose.Promise = global.Promise;

const db = mongoose.connection;

db.once('open' ,() => {
	console.log('Connect db success')
})

db.on('error', function(error) {
    console.error('Error in MongoDb connection: ' + error)
    mongoose.disconnect()
});

db.on('close', function() {
    console.log('Missing connection with db,reconnecting...')
    mongoose.connect(dbUrl, {
        autoReconnect :true,
        useNewUrlParser: true 
    });
});

module.exports = db