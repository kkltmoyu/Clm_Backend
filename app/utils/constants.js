let constants = {}

constants.whiteList = ['http://192.168.1.100:8080','http://172.30.113.47:8080','http://192.168.1.101:8080','http://localhost:8080']
constants.mongodb = {
	username:'kk',
	password:'kk',
	ip:'localhost',
	port:27017,
	dbName:'clm',
}

constants.redis = {
	ip:'172.30.113.47',
	port:6379,
	password:'night'
}

module.exports = constants