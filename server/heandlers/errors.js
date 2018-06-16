export default (app)=>{
    app.use( async(ctx, next)=>{
        try {
            await next();
        } catch (error) {
            console.error(error);
        }
    })
}