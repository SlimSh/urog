export default (router)=>{    
router.get('/auth', async (ctx,body) => {
    ctx.body = 'Auth user'
  } )
}