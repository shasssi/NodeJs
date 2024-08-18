const Redis = require("ioredis");

const redisUri = process.env.REDIS_URI;

const redis = new Redis(redisUri);

module.exports = redis;
