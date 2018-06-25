import jwtService from '../services/jwt-service';
import User from '../schemas/user';

export default (app) => {
    app.use( async(ctx, next) => {
        const { authorization } = ctx.headers;
        if (authorization) {
            try {
                const { email } = await jwtService.verify(authorization);
                ctx.user = await User.findOne({email});
            } catch (e) {
                ctx.throw(401, { message: 'Invalid token' });
            }
        }
        await next();
    });
};
