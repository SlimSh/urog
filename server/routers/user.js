import User from '../schemas/user';
import Info from '../schemas/info';

export default (router)=>{    
    router.get('/user', async (ctx,next) => {
        let result = await ctx.db.collection('users').find();
        ctx.type = 'JSON';
        ctx.body = result;
      } )
    router.get('/user/add', async (ctx,next) => {
        let u = new User;
        u.name = 'Serega';
        u.age = 31;
        u.email = 'designid32@mail.ru'
        u.save();
        ctx.body = 'user added';
      } )
    router.get('/info/add', async (ctx,next) => {
        let i = new Info;
        i.title = 'dadsf';
        i.save();
        ctx.body = 'info added';
      } )
    router.get('/info', async (ctx,next) => {
      let result = await Info.find();
        ctx.body = result;
      } )
    }