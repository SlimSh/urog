import serve from 'koa-static';

export default (app) => {app.use(serve("view", {}));}