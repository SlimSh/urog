import favicon from 'koa-favicon';

export default (app)=>{app.use(favicon('./view/favicon.ico'))};