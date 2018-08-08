import Router from 'koa-router';
import userController from './controllers/user-controller';

export default (router)=>{    
    const routerUser = new Router({prefix: '/users'});
    routerUser.get('/all', userController.getAll)
              .post('/remove', userController.removeUser)
              .post('/add', userController.addUser);
    router.use(routerUser.routes());
};
