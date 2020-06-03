import IORedis from 'ioredis-mock';

const redisClient = new IORedis();

const redisMocked = redisClient.createClient({
    port: 6379,
    host: '120.0.0.1',
});

export default redisMocked;
