import mongo from 'koa-mongo'

export default async (ctx,next) => {
   ctx.body = await ctx.mongo.db('urogai').collection('users').find().toArray();

  // ctx.body = 'userRout'
}
