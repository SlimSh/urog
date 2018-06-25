import User from '../schemas/user';

export default (router)=>{
    router.get('/users', async (ctx,next) => {
        let result = await ctx.db.collection('users').find();
        ctx.type = 'JSON';
        ctx.body = result;
      } )
        .get('/user/remove/:id', async (ctx,next) => {
        let result = await User.findByIdAndRemove(ctx.params.id);
        ctx.body = result;
      } )
        .post('/user/add', async (ctx,next) => {
        let {username, age, email, password} = ctx.request.body;
        let u = new User;
        u.name = username;
        u.age = age;
        u.email = email;
        u.password = password;
        u.save();
        ctx.body = u;
      } )
}