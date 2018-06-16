import json from  'koa-json';

export default (app) => { app.use(json()) };