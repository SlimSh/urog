import koaMongoDb from 'koa-mongo-db';
import config from 'config';

export default (app)=>{app.use(koaMongoDb(config.get('mongodb')))}