import cheerio from 'cheerio'
import request from 'request'

export default async (ctx, next) => {
    // let result = await ctx.get(`/index.php`, {
    //   "c2": "firms",
    //   // co_id: 1,
    //   // ob_id: 1,
    //   // ra_id:'',
    //   // si_id:'',
    //   // ft:'',
    //   // // arrz:7,
    //   // page: 0
    // }, {
    //     'User-Agent': 'koa-http-request'
    // });
    let url = 'http://www.agroreklama.com/index.php?c2=firms&co_id=1&ob_id=1&arrz[3]=7&page=0'
    let result = [];
    request(url, (err, res, body) => {
      // console.log(body);
      let $ = cheerio.load(body);
      $('table').each((el)=> {
        console.log(el);
      })
    })
    console.log(result);
    ctx.body = 'result'
    // ctx.body =  destructResult(result.features)
};
