const Redis = require('ioredis');
require('dotenv').config();

const redis = new Redis({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    password:process.env.REDIS_PASS
});

// first check cache for the key
redis.get("test", (err, result) => {
 if (err) {
   console.error(err);
   // if no error occurs
 } else {
  console.log('not searching around')
   console.log(result);
   if(result == null){
    redis.setex('test',9000,'test')
   }
 }
});