import Router from 'koa-router';
import authController from './controllers/auth-controller';
export default (router)=>{
  const routerAuth = new Router({prefix: '/auth'});
  routerAuth
    .post('/signUp', authController.signUp)
    .post('/signOut', authController.signOut)
    .post('/signIn', authController.signIn)
    .post('/private', authController.private);
  router.use(routerAuth.routes());
}