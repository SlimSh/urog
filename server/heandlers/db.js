import koaMongoDb from 'koa-mongo-db';
import config from 'config';
import mongoose from 'mongoose';

export default (app) => {
    mongoose.connect(config.get('db'));
    app.use(koaMongoDb(config.get('db')))
}