import session from 'koa-session';
import config from 'config';
import CONFIG_S from '../../config/session';

export default (app)=> {

    app.keys = config.get('session.secret');    
      
      app.use(session(CONFIG_S, app));
     
    //   app.use(ctx => {
    //     let n = ctx.session.views || 0;
    //     ctx.session.views = ++n;
    //     ctx.body = n + ' views';
    //   });
}



