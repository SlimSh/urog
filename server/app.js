import Koa from "koa";
import Router from "koa-router";
import heandlers from "./heandlers/"
import routers from "./routers/"

const app = new Koa();
heandlers.forEach(heandler=>{heandler(app)});

// default Router
const router = new Router();
routers.forEach((rout)=>{rout(router)});

router.get('/', async (ctx,body) => {
  ctx.body = 'Hellow world';
});

// app
app.use(router.routes()).use(router.allowedMethods());

export default app;
