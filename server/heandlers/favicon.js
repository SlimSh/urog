import favicon from 'koa-favicon';

export default (app)=>{app.use(favicon(__dirname+'/view/favicon.ico'))};