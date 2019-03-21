let genericPool  = require('generic-pool');
let redis = require('redis');
const constants = require('../utils/constants')

/**
 * Step 1 - Create pool using a factory object
 */
const factory = {
  create: function() {
  	let cli = redis.createClient(constants.redis.port , constants.redis.ip);
  	cli.auth(constants.redis.password,() => {  
	    console.log('通过认证');  
	});  
    return cli;
  },
  destroy: function(client) {
    client.disconnect();
  }
};

const opts = {
  max: 10, // maximum size of the pool
  min: 3, // minimum size of the pool
  idleTimeoutMillis : 10000,
};

const myPool = genericPool.createPool(factory, opts);

export default myPool
/**
 * Step 2 - Use pool in your code to acquire/release resources
 */

// acquire connection - Promise is resolved
// once a resource becomes available
/*const resourcePromise = myPool.acquire();

resourcePromise
  .then(function(client) {
  	client.get('hello',(err,v) =>{
		console.log("hello",err,v);
	})
	// client.on('ready',function(err){  
	//     console.log('ready');  
	// })
	// client.on('end',function(err){  
	//     console.log('end');  
	// })
	myPool.release(client);

   })
  .catch(function(err) {
    // handle error - this is generally a timeout or maxWaitingClients
    // error
  });*/