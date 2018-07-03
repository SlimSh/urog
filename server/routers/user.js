export default (router)=>{    
    router.get('/user', async (ctx,body) => {
         let result = await ctx.db.collection('users').find();        
        ctx.type = 'JSON';
        ctx.body = result;
      } )
    }