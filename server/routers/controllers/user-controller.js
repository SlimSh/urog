import User from '../../schemas/user';
import asyncBusboy from 'async-busboy';

export default {
    async getAll (ctx) {
        console.log('ALLL USERS')
        let result = await User.find();        
        ctx.type = 'JSON';
        ctx.body = result;
    },
    async removeUser (ctx) {
        const {id} = ctx.request.body;
        await User.remove({_id:id});
        const result = await User.find();
        ctx.body = result;
    },
    async addUser (ctx) {
        console.log(ctx);
    }
}