export default {
    key: 'koa:sess', 
    maxAge: 86400000,
    overwrite: true, 
    httpOnly: false, 
    signed: false,
    rolling: false,
    renew: false, 
  }