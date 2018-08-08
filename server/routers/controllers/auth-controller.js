import pick from 'lodash/pick';
import User from '../../schemas/user';
import jwtService from '../../services/jwt-service';

export default {
    async signUp (ctx) {
        const { _id } = await User.create(pick(ctx.request.body, User.createFields));
        // const user = await User.findOneWithPublicFields({_id});
        const users = await User.find();
        ctx.body = { data: users };
    },
    async signOut (ctx) {
        ctx.body = 'sign out';
    },
    async signIn (ctx) {
        const { email, password } = ctx.request.body;
        if( !email || !password) {
            ctx.throw(400, {message: 'Invalide data'})
        }
        const user = await User.findOne({ email });
        if (!user) {
            ctx.throw(400, {message: 'User not found'})
        }
        if (!user.comparePassword(password)) {
            ctx.throw(400, {message: 'Invalid password'})
        }
        const token = await jwtService.genToken({ email });
        ctx.body = { data: token };
    },
    async private (ctx) {
        console.log(ctx.header);

        if(!ctx.user) {
            ctx.throw(403, {message: 'Forbidden'})
        }
        ctx.body = ctx.user;
    }

}